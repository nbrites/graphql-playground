# graphql-playground

A GraphQL server that allows the user to interact with data using GraphiQL.

## Built with

- Node.js
- Express
- GraphQL Express
- GraphiQL Express
- Sqlite

## How to install and run

- Run 'npm install'
- Run 'npm start'
- Go to 'localhost:4000/graphiql' and explore using graphiql.

Try the following query to see all the channels and respective messages

```
{
  channels { 
    name,
    messages {
      text
    }
  }
}
```


