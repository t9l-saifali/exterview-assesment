import "../styles/globals.css";
import { ApolloProvider,ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import generateMuiTheme from "../src/mui/theme";
import { ThemeProvider } from "@material-ui/styles";
import Layout from "../src/components/Layout";

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://x2d6c4ro68.execute-api.us-east-1.amazonaws.com/dev/graphql', // Use your deployed API URL here
    // uri: 'http://localhost:3001/dev/graphql', // Use your deployed API URL here

  }),
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }) {
  return       <ApolloProvider client={client}>
    <ThemeProvider theme={generateMuiTheme()}>
      <Layout/>
  <Component {...pageProps} />
  </ThemeProvider>
  </ApolloProvider>
  ;
}

export default MyApp;
