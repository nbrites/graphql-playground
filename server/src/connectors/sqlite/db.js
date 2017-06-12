// server/src/connectors/sqlite/db.js

import Sequelize from 'sequelize';

export const db = new Sequelize('playground', null, null, {
  dialect: 'sqlite',
  storage: './src/connectors/sqlite/playground.sqlite',
});