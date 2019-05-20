import React from 'react';
import { LoginPage, RegisterPage } from './pages/index'; 

import { Route } from 'react-router-dom'; 

function App() {
  return (
    <>
    
    <Route exact path="/" component={LoginPage}/> 
    <Route path="/register" component= {RegisterPage} /> 
    
    </>
  );
}

export default App;
