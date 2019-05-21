import React from 'react';
import { LoginPage, RegisterPage, SettingsPage, SearchPage, DataCardPage } from './pages/index'; 
import PrivateRoute from './PrivateRoute'
import { Route } from 'react-router-dom'; 

//This is for testing purposes only. This will need to be deleted before PR to origin master. There is several pieces in this code that will need to be removed before PR


function App() {
  return (
    <>
    <Route exact path="/" component={LoginPage}/> 
    <Route path="/register" component= {RegisterPage} /> 
    <PrivateRoute path="/settings" component= {SettingsPage} /> 
    <PrivateRoute exact path="/search" component= {SearchPage} /> 
    <PrivateRoute exact path="/search-results" component= {DataCardPage} /> 
    </>
  );
}

export default App;
