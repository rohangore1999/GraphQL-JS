import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Types
import { typeDefs } from "./typeDefs.js";

// Resolver
import { resolvers } from "./resolvers.js";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

// Fetch call from CLIENT SIDE -:
// fetch("http://localhost:4000/", {
//   "body": "{\"query\":\"query ExampleQuery {\\n  authors {\\n    id\\n  }\\n  books {\\n    id\\n  }\\n}\\n\",\"variables\":{},\"operationName\":\"ExampleQuery\"}",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "omit"
// }).then(res=>res.json()).then(data=>console.log(data))
