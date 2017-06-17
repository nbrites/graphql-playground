# graphql-playground

A GraphQL server that allows the user to interact with data using GraphiQL.

## Built with

- Node.js
- Express
- GraphQL Express
- GraphiQL Express
- Data connectors:
  - Sqlite
    - Run 'node run setup-sqlite' to create and populate the sqlite instance
  - DynamoDB
    - Expects a local DynamoDB instance to run on 'localhost:3001' (see [Download and Run DynamoDB Locally](http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.Download.html))
    - Go to the local instance folder and run 'java -Djava.library.path=./DynamBLocal_lib -jar DynamoDBLocal.jar -sharedDb -inMemory -port 3001'
    - Run 'node run setup-dynamodb' to create and populate the DynamoDB instance
  - REST endpoints

## How to install and run

- Enter 'server' folder
- Run 'npm install'
- Run 'npm start'

## Queries

Try the following query on the different connectors.

```
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

### Sqlite

Go to 'localhost:4000/graphiql/sqlite' and explore using graphiql.

### DynamoDB

Go to 'localhost:4000/graphiql/dynamodb' and explore using graphiql.

### Rest Endpoint

The query bellow can be run in all graphiql endpoints listed above.

```
{
  countries {
    name
    alpha2_code
    alpha3_code
  }
}
```
