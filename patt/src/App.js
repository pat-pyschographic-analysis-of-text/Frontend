// Importing React
import React from 'react';

// Importing our components
import { LoginPage, RegisterPage, SettingsPage, SearchPage } from './pages/index'; 

import PrivateRoute from './PrivateRoute'
import { Route } from 'react-router-dom'; 
// Connect lets us link up our React Components to our Redux store  
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom' 

// CONFIRM: We made App a simple functional component because it doesn't need to store state (that's in our Redux store). 
// CONFIRM: It takes props through PrivateRoute and our reducers. 
// If the user is not logged in, we push them back to the home page. 
function App(props) {
  function helper() {
    if(props.loggedIn == false) {
      if(props.location.pathname !== "/" && props.location.pathname !== "/register") {
        props.history.push('/')
      }
    }
  }
  return (
    <>
    {helper()}
      <Route exact path="/" component={LoginPage}/> 
      <Route path="/register" component= {RegisterPage} /> 
      <PrivateRoute path="/settings" component= {SettingsPage} /> 
      <PrivateRoute exact path="/search" component= {SearchPage} /> 
    </>
  );
}

// CONFIRM: All this means is that our App component is watching for updates in the Redux store state. 
const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

export default connect(
  mapStateToProps
)(withRouter(App));
