import React from 'react';
import { LoginPage, RegisterPage, UpdatePage } from './pages/index'; 

import { Route } from 'react-router-dom'; 

function App() {
  return (
    <>
    
    <Route exact path="/" component={LoginPage}/> 
    <Route path="/register" component= {RegisterPage} /> 
    <Route path="/update" component= {UpdatePage} /> 
    
    </>
  );
}

export default App;
