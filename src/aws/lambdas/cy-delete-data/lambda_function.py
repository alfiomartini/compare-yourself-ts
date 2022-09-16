import simplejson as json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('compare-yourself')

def lambda_handler(event, context):
    key = {'UserId': event['userId']}
    print('key', key)
    try: 
        response = table.delete_item(Key=key)
        print('response', response)
        return {
            'statusCode': 200,
            'body': 'Data about age, height and income: deleted'
        }
    except Exception as e:
        print('error', e)
        return {
            'statusCode': 500,
            'body': 'problems in deleting item'
        }
