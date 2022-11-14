import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clafncz2r0tg301ut62x7d9zb/master",
  cache: new InMemoryCache(),
});

export default client;
