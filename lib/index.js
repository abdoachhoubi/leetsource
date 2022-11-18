import { ApolloClient, InMemoryCache } from "@apollo/client";
import GQL__DB__CONNECTION__URI from "../private/env/echo/ENV";

let client = new ApolloClient({
  uri: process.env.GQL__DB__CONNECTION__URI || GQL__DB__CONNECTION__URI,
  cache: new InMemoryCache(),
});

export default client;
