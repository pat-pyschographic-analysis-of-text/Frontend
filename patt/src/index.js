import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Importing extra Redux dependencies
import { createStore, applyMiddleware, compose } from 'redux'; 
import { Provider }  from 'react-redux'; 
import thunk from 'redux-thunk'; 
import logger from 'redux-logger'; 

import { BrowserRouter as Router } from 'react-router-dom';  

import rootReducer from '../src/reducers'; 

// Creating compose enhancer 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// Creating store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))); 


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);


