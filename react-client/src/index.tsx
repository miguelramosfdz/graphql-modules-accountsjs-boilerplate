import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Router from './Router';
import { ApolloProvider } from 'react-apollo';
import { apolloClient } from './utils/accounts';

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <Router />
    </ApolloProvider>
    , document.getElementById('root') as HTMLElement);
