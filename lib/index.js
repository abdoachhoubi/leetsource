import fetch from "cross-fetch";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clafncz2r0tg301ut62x7d9zb/master",
    fetch,
  }),
  cache: new InMemoryCache(),
});

export default client;
