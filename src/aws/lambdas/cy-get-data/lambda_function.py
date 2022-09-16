import simplejson as json
import boto3
import random

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('compare-yourself')

def lambda_handler(event, context):
    print('event', event)
    type = event['type']
    result_list = []
    if type == 'all':
        try:
            response = table.scan()
            # it scans only up to 1MB of data. Have to improve this
            data = response['Items']
            if (data is None):
                return {'statusCode': 400, 'body':'No data is available'}
            for elem in data:
                dict = {}
                for (k,v) in elem.items():
                    if k != 'UserId':
                        dict[k.lower()]=json.dumps(v)
                result_list.append(dict)
            return {'statusCode': 200, 'body': result_list}
        except Exception as e:
            print(e)
            return {'statusCode': 500, 'body':"Error scanning table"}
    elif type == 'single':
        try:
            key = {'UserId': event['userId']}
            response = table.get_item(Key=key)
            data = response['Item']
            if (data): 
                return {
                    'statusCode': 200,
                    'body': {'age': data['Age'],
                           'height': data['Height'],
                           'income': data['Income']
                          }
                        }
            else:
                return {'statusCode': 400, 'body': "No data available for this user"}
        except Exception as e:
            return {'statusCode': 500, 'body': "Error in getting the data"}
    else:
        return {'statusCode':400, 'body':'No recognizable type was specified'}
