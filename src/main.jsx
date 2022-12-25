import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloProvider } from '@apollo/client';
import client from './services/graphql/client';

import App from './app';

import { GlobalStyle } from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
