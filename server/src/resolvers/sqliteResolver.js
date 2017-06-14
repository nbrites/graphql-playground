// server/src/resolvers/sqliteResolvers.js

import { Country } from '../connectors/rest-endpoints/country';
import { SqliteClient } from '../connectors/sqlite/client';

export const SqliteResolvers = {
  Query: {
    countries: () => {
      return Country.getAll();
    },
    movie: (_, args) => {
      return SqliteClient.get(args.year, args.title);
    }
  }
};