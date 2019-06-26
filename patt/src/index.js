// We need both React and ReactDOM because we'll be manipulating the DOM.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import  '../src/index.css'; 

// Importing Redux dependencies
import { createStore, applyMiddleware, compose } from 'redux'; 
// Provider makes or store available to any nested components 
import { Provider }  from 'react-redux'; 
// Thunk will let our action creators return functions 
import thunk from 'redux-thunk'; 
// Routers keep our UI and urls in sync 
import { BrowserRouter as Router } from 'react-router-dom';  
// Reducers specify how state changes depending on actions store receives 
import rootReducer from '../src/reducers'; 

// Creating compose enhancer that makes use of Redux dev tools 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// Creating store, which holds patt's complete state tree 
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))); 


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);


