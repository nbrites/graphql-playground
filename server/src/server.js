import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import { SqliteResolvers } from './resolvers/sqliteResolver';
import { DynamoDBResolvers } from './resolvers/dynamoDBResolver';
import { typeDefs } from './schema';

import { makeExecutableSchema } from 'graphql-tools';

const PORT = 4000;
const server = express();

server.use('*', cors({ origin: 'http://localhost:3000' }));

server.use('/graphql/sqlite', bodyParser.json(), graphqlExpress({
  schema: makeExecutableSchema({ typeDefs, resolvers: SqliteResolvers })
}));

server.use('/graphql/dynamodb', bodyParser.json(), graphqlExpress({
  schema: makeExecutableSchema({ typeDefs, resolvers: DynamoDBResolvers })
}));

server.use('/graphiql/sqlite', 
  graphiqlExpress({
    endpointURL: '/graphql/sqlite'
  })
);

server.use('/graphiql/dynamodb', 
  graphiqlExpress({
    endpointURL: '/graphql/dynamodb'
  })
);

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));
