// server/src/connectors/dynamoDB/aws.js

var AWSSdk = require("aws-sdk");

AWSSdk.config.update({
  region: "us-west-2",
  endpoint: "http://localhost:3001",
  // for usage of local DynamoDB instance
  credentials: new AWSSdk.Credentials('accessKeyId', 'secretAccessKey', 'sessionToken'),
  // if the DynamoDB instance is hosted on AWS use a profile configuration
  // credentials: new AWSSdk.SharedIniFileCredentials({profile: 'test-account'});
});


export const AWS = AWSSdk;