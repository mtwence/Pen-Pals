import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import BBoard from "./pages/BBoard";
import Entry from "./pages/Entry";
//import Compose from './pages/Compose';
//import Response from './pages/Response';

const httpLink = createHttpLink({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<BBoard />} />
          <Route path="/loginsignup" element={<Entry />} />
          {/* <Route
        path="/compose"
        element={<Compose />}
        />
        <Route
        path="/responses"
        element={<Response/>}
        /> */}
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
