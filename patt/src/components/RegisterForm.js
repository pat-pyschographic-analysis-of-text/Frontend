import React from 'react'; 
import { Link } from 'react-router-dom'; 
import styled from 'styled-components'; 
import { connect } from 'react-redux';
import { register } from '../actions';
import { withRouter } from 'react-router-dom'; 

import FullLogo from '../assets/FullLogo.png';

// Full page wrapper styling
const RegisterWrapper = styled.div`
    background-color: white; 
    max-width: 500px; 
    width: 100%; 
    margin: 0 auto; 
    display: flex; 
    flex-direction: column; 
    text-align: center; 
    align-items: center; 
    font-family: 'Montserrat', sans-serif;
`; 

// Logo 
const LogoStyle = styled.img`
    /* Sizing */
    max-width: 60%; 
    height: auto; 

    margin-top: 5vh; 
`; 

// Register section 
const RegisterFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #778899;
  background-color: #12b1fc;
  padding: 5%;
  border-radius: 10px;
  margin-top: 5vh;
`; 

const RegisterTitle = styled.h2`
    color: white; 
`; 

const RegisterInput = styled.input`
border: 1px solid #778899; 
font-family: 'Montserrat', sans-serif;
padding: 1vh;
margin: 3%; 
`; 

const RegisterButton = styled.button `
    background-color: #6ce3ff; 
    font-family: 'Montserrat', sans-serif;
    color: white; 
    border-radius: 10px; 
    padding: 2%; 
    width: 50%; 
    margin-top: 2%; 

    &:hover {
      background-color: white;
        color: #6ce3ff; 
    }
`; 

class RegisterForm extends React.Component {
  state =  {
    credentials: {
      username: '',
      password: '', 
      twitter_handle: ''
    }
  }

  handleChanges = e => {
    this.setState({
      credentials : {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  register = e => {
    e.preventDefault()
    console.log(this.state.credentials)
    this.props.register(this.state.credentials)
      .then(() => {
        this.timeOut()
      })
  }
  timeOut = () => {
    {this.props.message &&
    setTimeout(() => 
    this.props.history.push('/search')
      , 2000)}
  }
    render() {
        return (
          <RegisterWrapper>
            <LogoStyle src={FullLogo} alt="TweetMate logo" />

            <RegisterFormWrapper onSubmit={this.register}>
              <RegisterTitle>Create account</RegisterTitle>

              <RegisterInput
                name="username"
                type="text"
                placeholder="Username"
                onChange={this.handleChanges}
              />

              <RegisterInput
                name="twitter_handle"
                type="text"
                placeholder="Twitter handle"
                onChange={this.handleChanges}
              />

              <RegisterInput
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleChanges}
              />

              <RegisterButton onClick={this.register}>
                Sign up
              </RegisterButton>
            </RegisterFormWrapper>
            {this.props.message && <p>{this.props.message}</p>}
            {this.props.error && <p>{this.props.error}</p>}
          </RegisterWrapper>
        );
    }
}

const mapStateToProps = state => ({
  registering: state.registering,
  error: state.error,
  message: state.message
})

export default connect(
  mapStateToProps,
  { register }
)(withRouter(RegisterForm)); 