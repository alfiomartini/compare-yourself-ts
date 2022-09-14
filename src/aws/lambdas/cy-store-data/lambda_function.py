import json
import boto3
import random

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('compare-yourself')

def lambda_handler(event, context):
    print('event', event);
    
    item = {
    'UserId': event['userId'],
    'Age': event['age'],
    'Height': event['height'],
    'Income': event['income']
    }
    try:
        response = table.put_item(Item=item)
        return {
            'statusCode': 200,
            'body': 'added item to the database'
        }
    except Exception as e:
        print(e)
        return {
            'statusCode': 400,
            'body': 'error in adding item to the database'
        }

