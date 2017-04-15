// src/schema.js

import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `

type Channel {
   id: ID!                # "!" denotes a required field
   name: String
   messages: [Message]
}

type Message {
   id: ID!                # "!" denotes a required field
   timestamp: String
   text: String
   channel: [Channel]
}

type Country {
  name: String
  alpha2_code: String
  alpha3_code: String
}

# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
   channels: [Channel]
   channel(name: String): Channel
   countries: [Country]
}

# The mutation root type, used to define all mutations.
type Mutation {
  # A mutation to add a new channel to the list of channels
  addChannel(name: String!): Channel
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };