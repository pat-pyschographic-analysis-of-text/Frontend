import React from 'react';
import { LoginPage, RegisterPage, SettingsPage, SearchPage, DataCardPage } from './pages/index'; 

import { Route } from 'react-router-dom'; 

function App() {
  return (
    <>
    
    <Route exact path="/" component={LoginPage}/> 
    <Route path="/register" component= {RegisterPage} /> 
    <Route path="/settings" component= {SettingsPage} /> 
    <Route path="/search" component= {SearchPage} /> 
    <Route path="/search-results" component= {DataCardPage} /> 
    
    </>
  );
}

export default App;
