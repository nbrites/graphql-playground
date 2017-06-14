// server/src/schema.js

export const typeDefs = `

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

# This type specifies the entry points into the API
type Query {
  countries: [Country],
  movie(year:Int, title:String): Movie
}
`;