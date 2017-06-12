// server/src/connectors/dynamoDB/setup/mockDataLoader.js

var fs = require('fs');

import { AWS } from './../aws';

export const MockDataLoader = {
    loadData: () => {
        var docClient = new AWS.DynamoDB.DocumentClient();

        console.log("Importing movies into DynamoDB. Please wait.");

        var allMovies = JSON.parse(fs.readFileSync('moviedata.json', 'utf8'));
        allMovies.forEach(function(movie) {
            var params = {
                TableName: "Movies",
                Item: {
                    "year":  movie.year,
                    "title": movie.title,
                    "info":  movie.info
                }
            };

            docClient.put(params, function(err, data) {
            if (err) {
                console.error("Unable to add movie", movie.title, ". Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("PutItem succeeded:", movie.title);
            }
            });
        });
    }
}