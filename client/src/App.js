import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Sidebar from "./components/Sidebar";
import BBoard from "./pages/BBoard";
import BBoard2 from "./pages/BBoard2";
import Entry from "./pages/Entry";
import BGM from "./assets/Firelink_Shrine.mp3";
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
        <div class="container-fluid">
          <div class="row flex-nowrap">
            <Sidebar />
            <div class="col py-3" id="background">
              <embed
                src={BGM}
                loop="true"
                autostart="true"
                width="2"
                height="0"
              ></embed>
              <Routes>
                <Route path="/" element={<BBoard />} />
                <Route path="*" element={<BBoard2 />} />
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
            </div>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
