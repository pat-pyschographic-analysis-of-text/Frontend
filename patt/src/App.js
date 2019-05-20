import React from 'react';
import { LoginPage, RegisterPage, UpdatePage, SearchPage, DataCardPage } from './pages/index'; 

import { Route } from 'react-router-dom'; 

function App() {
  return (
    <>
    
    <Route exact path="/" component={LoginPage}/> 
    <Route path="/register" component= {RegisterPage} /> 
    <Route path="/update" component= {UpdatePage} /> 
    <Route path="/search" component= {SearchPage} /> 
    <Route path="/search-results" component= {DataCardPage} /> 
    
    </>
  );
}

export default App;
