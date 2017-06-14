// server/src/connectors/sqlite/client.js

import { Movie, MovieInfo } from './setup/dataDefinition';

export const SqliteClient = {
  get: (year, title) => {
    var table = "Movies";

    var params = {
      "year": year,
      "title": title
    };

    return Movie.findOne({
      where: params,
      include: [
        { model: MovieInfo, required: true }
      ]
    })
    .then(movie => {
      return movie;
    });
  }
}