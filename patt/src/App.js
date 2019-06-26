// Importing React
import React from 'react';

// Importing our components
import { LoginPage, RegisterPage, SettingsPage, SearchPage } from './pages/index'; 

// In PrivateRoute, I'm confused about how components are being passed down as props {...rest}
import PrivateRoute from './PrivateRoute'
import { Route } from 'react-router-dom'; 
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom' 

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

const mapStateToProps = state => ({
  loggedIn: state.loggedIn
})

export default connect(
  mapStateToProps
)(withRouter(App));
