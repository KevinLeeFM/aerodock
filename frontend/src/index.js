/*
* @Author: Difei Gu
* @Date:   2020-04-30 18:41:53
* @Last Modified by:   Difei Gu
* @Last Modified time: 2020-04-30 21:42:51
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from "react-router-dom"

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';



/*
    our api client will make request to thils adress.
*/
const apiclient = new ApolloClient({
    uri: 'http://127.0.0.1:8000/dashboard/graphql/',
  });


const Init = () => (
    <ApolloProvider client={apiclient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
)

ReactDOM.render( <Init />, document.getElementById('root'))