// server/src/connectors/sqlite/setup/init.js

import { Movie, MovieInfo } from './dataDefinition';
import { db } from '../db';

var fs = require('fs');

db.sync({ force: true }).then(() => {
  var allMovies = JSON.parse(fs.readFileSync('moviedata.json', 'utf8'));
  allMovies.forEach( movie => {
    return Movie.create({
      year: movie.year,
      title: movie.title
    }).then( movieModel => {
      return movieModel.createInfo(movie.info);
    });
  });
});