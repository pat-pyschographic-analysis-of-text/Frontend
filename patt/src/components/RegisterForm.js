import React from 'react'; 
import { Link } from 'react-router-dom'; 

import styled from 'styled-components'; 

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
        background-color: #352ecb;
        cursor: pointer;
    }
`; 

class RegisterForm extends React.Component {
    render() {
        return (
          <RegisterWrapper>
            <MobileLogoStyled src={MobileLogo} alt="TweetMate logo" />
            <HeaderTitle>Create account</HeaderTitle>
            <RegisterFormWrapper>
              <RegisterInput 
              name="email" 
              type="text" 
              placeholder="Email" 
              />

              <RegisterInput
                name="username"
                type="text"
                placeholder="Username"
              />

              <RegisterInput
                name="password"
                type="password"
                placeholder="Password"
              />

              <Link to="/search"><SignUpButton>Sign up</SignUpButton></Link>
            </RegisterFormWrapper>

          </RegisterWrapper>
        );
    }
}

export default RegisterForm; 