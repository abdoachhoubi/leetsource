import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_GQL__DB__CONNECTION__URI,
    fetch,
  }),
  cache: new InMemoryCache(),
});

export default client;
