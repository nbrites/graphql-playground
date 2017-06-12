// server/src/resolvers/dynamoDBResolver.js

import { Country } from '../connectors/rest-endpoints/country';
import { DynamoDBClient } from '../connectors/dynamoDB/client';

export const DynamoDBResolvers = {
  Query: {
    countries: () => {
      return Country.getAll();
    },
    movie: (_, args) => {
      return DynamoDBClient.get(args.year, args.title);
    }
  }
};