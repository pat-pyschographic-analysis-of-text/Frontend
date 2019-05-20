import React from 'react';
import { LoginPage } from './pages/index'; 

import { Route } from 'react-router-dom'; 

function App() {
  return (
    <>
    <Route path="/" component={LoginPage}/> 
    
    </>
  );
}

export default App;
