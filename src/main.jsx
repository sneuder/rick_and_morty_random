import React from "react";
import ReactDOM from "react-dom/client";

import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";

import App from "./App";

import { GlobalStyle } from "./styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
