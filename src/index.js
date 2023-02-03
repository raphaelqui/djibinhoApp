import React from 'react';

import { incrementCounter } from './actions/index.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import reduce from './reducers/index.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';


import App from './App.js';
import { Amplify, API, graphOperation } from 'aws-amplify';

import config from './aws-exports';
Amplify.configure(config);




const AuthContext = React.createContext(null);

var store = createStore(reduce);



const container = document.getElementById('root');
const root = createRoot(container); 


root.render(

  <Provider store={store} value="2">
    <Router>
      

      <App/>   

    </Router>
  </Provider>  
);







