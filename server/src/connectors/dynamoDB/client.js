// src/connectors/dynamoDB/client.js

import { AWS } from './aws';

export const DynamoDBClient = {
    get: (year, title) => {
        var docClient = new AWS.DynamoDB.DocumentClient()

        var table = "Movies";

        var params = {
            TableName: table,
            Key:{
                "year": year,
                "title": title
            }
        };

        return docClient.get(params).promise().then( data => {
            return data.Item;
        });
    }
}