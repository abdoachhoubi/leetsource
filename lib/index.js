import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import GQL__DB__CONNECTION__URI from "../private/env/echo/ENV";

let client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.GQL__DB__CONNECTION__URI || GQL__DB__CONNECTION__URI,
    fetch,
  }),
  cache: new InMemoryCache(),
});

export default client;
