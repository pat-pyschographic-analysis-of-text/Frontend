import React from 'react'; 
import { Link } from 'react-router-dom'; 
import styled from 'styled-components'; 
import { connect } from 'react-redux'
import { register } from '../actions'
import { withRouter } from 'react-router-dom'

import MobileLogo from '../assets/MobileLogo.png';

// Overall Component styling 
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
const RegisterFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`; 


// Logo 
const MobileLogoStyled = styled.img`
    max-width: 30%; 
    height: auto; 
`; 

const HeaderTitle = styled.h2`
    color: #0082c9; 
`; 

const RegisterInput = styled.input`
border: 1px solid #778899; 
font-family: 'Montserrat', sans-serif;
margin: 3%; 
`; 

const SignUpButton = styled.button `
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
      password: ''
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
            <MobileLogoStyled src={MobileLogo} alt="TweetMate logo" />
            <HeaderTitle>Create account</HeaderTitle>
            <RegisterFormWrapper onSubmit={this.register)>


              <RegisterInput
                name="username"
                type="text"
                placeholder="Email"
                onChange={this.handleChanges}
              />

              <RegisterInput
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.handleChanges}
              />

              <SignUpButton onClick={this.register}>Sign up</SignUpButton>
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