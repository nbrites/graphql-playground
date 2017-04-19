// src/resolvers.js

import { Channel } from './connectors/sqlite';
import { Country } from './connectors/rest-endpoints/country';
import { DynamoDBClient } from './connectors/dynamoDB/client';

export const resolvers = {
  Query: {
    channels: () => {
      return Channel.findAll();
    },
    channel(_, args) {
      return Channel.find({ where: args });
    },
    countries: () => {
      return Country.getAll();
    },
    movie: (_, args) => {
      return DynamoDBClient.get(args.year, args.title);
    }
  },
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = { id: nextId++, name: args.name };
      channels.push(newChannel);
      return newChannel;
    },
  },
  Channel: {
    messages(channel) {
      return channel.getMessages();
    },
  },
  Message: {
    channel(message) {
      return message.getChannel();
    },
  }
};