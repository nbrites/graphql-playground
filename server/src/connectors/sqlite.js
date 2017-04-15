// src/connectors/sqlite.js

import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

const db = new Sequelize('playground', null, null, {
  dialect: 'sqlite',
  storage: './playground.sqlite',
});

const ChannelModel = db.define('channel', {
  name: { type: Sequelize.STRING }
});

const MessageModel = db.define('message', {
  text: { type: Sequelize.STRING },
  timestamp: { type: Sequelize.STRING }
});

ChannelModel.hasMany(MessageModel);
MessageModel.belongsTo(ChannelModel);

casual.seed(123);
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return ChannelModel.create({
      name: casual.color_name
    }).then((channel) => {
      return channel.createMessage({
        timestamp: new Date().getTime().toString(),
        text: casual.sentences(3),
      });
    });
  });
});

const Channel = db.models.channel;
const Message = db.models.message;

export { Channel, Message };