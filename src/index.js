import React from 'react';
import { render } from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
})

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2> My Side Project Liveth</h2>
    </div>
  </ApolloProvider>
);

render(<App/>, document.getElementById("root"));
serviceWorker.unregister();
