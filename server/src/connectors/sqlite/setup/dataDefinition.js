// server/src/connectors/sqlite/setup/sqlite.js

import Sequelize from 'sequelize';
import { db } from '../db';

const MovieModel = db.define('movie', {
  year: { type: Sequelize.INTEGER },
  title: { type: Sequelize.STRING }
});

const MovieInfoModel = db.define('info', {
  directors: { 
    type: Sequelize.STRING,
    get() {
        return JSON.parse(this.getDataValue('directors'));
    },
    set(val) {
        this.setDataValue('directors', JSON.stringify(val));
    }
  },
  release_date: { type: Sequelize.STRING },
  rating: { type: Sequelize.FLOAT },
  genres: { 
    type: Sequelize.STRING,
    get() {
        return JSON.parse(this.getDataValue('genres'));
    },
    set(val) {
        this.setDataValue('genres', JSON.stringify(val));
    }
  },
  image_url: { type: Sequelize.STRING },
  plot: { type: Sequelize.STRING },
  rank: { type: Sequelize.INTEGER },
  running_time_secs: { type: Sequelize.INTEGER },
  actors: { 
    type: Sequelize.STRING,
    get() {
        return JSON.parse(this.getDataValue('actors'));
    },
    set(val) {
        this.setDataValue('actors', JSON.stringify(val));
    }
  }
});

MovieModel.hasOne(MovieInfoModel);
MovieInfoModel.belongsTo(MovieModel);

const Movie = db.models.movie;
const MovieInfo = db.models.info;

export { Movie, MovieInfo, db };
