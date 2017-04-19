# graphql-playground

A GraphQL server that allows the user to interact with data using GraphiQL.

## Built with

- Node.js
- Express
- GraphQL Express
- GraphiQL Express
- Data connectors:
  - Sqlite (default)
  - DynamoDB
    - Expects a local DynamoDB instance to run on 'localhost:3001' (see [Download and Run DynamoDB Locally](http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.Download.html))
    - Run 'node run setup-dynamodb' to create and populate the instance
  - Rest enpoints

## How to install and run

- Run 'npm install'
- Run 'npm start'
- Go to 'localhost:4000/graphiql' and explore using graphiql.

## Queries

Try the following queries to test the different connectors.

### Sqlite

To see all the channels and respective messages:

```json
{
  channels {
    name,
    messages {
      text
    }
  }
}
```

### DynamoDB

```json
{
  movie(title:"Batman", year: 1989) {
    year
    title
    info {
      directors
      release_date
      rating
      genres
      image_url
      plot
      rank
      running_time_secs
      actors
    }
  }
}
```

### Rest Endpoint

```json
{
  countries {
    name
    alpha2_code
    alpha3_code
  }
}
```

