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

type MovieInfo {
  directors: [String],
  release_date: String,
  rating: Float,
  genres: [String],
  image_url: String,
  plot: String,
  rank: Int,
  running_time_secs: Int,
  actors: [String]
}

type Movie {
  year: Int,
  title: String,
  info: MovieInfo
}

# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
   channels: [Channel]
   channel(name: String): Channel
   countries: [Country],
   movie(year:Int, title:String): Movie
}

# The mutation root type, used to define all mutations.
type Mutation {
  # A mutation to add a new channel to the list of channels
  addChannel(name: String!): Channel
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };