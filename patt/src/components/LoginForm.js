import React from 'react'; 
import { Link } from 'react-router-dom'; 

import styled from 'styled-components'; 

import MobileLogo from '../assets/MobileLogo.png'; 

// Universal Login page styling 

const LoginWrapper = styled.div`
    color: red; 
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

const LoginFormWrapper = styled.form`
    display: flex; 
    flex-direction: column; 
`;

// Logo 

const MobileLogoStyled = styled.img`
    max-width: 30%; 
    height: auto; 
`; 

// Text Headers 

const HeaderTitle = styled.h2`
    color: #0082c9; 
`; 

const HeaderSubtitle = styled.h5`
    color: #778899; 
    width: 60%; 
`; 

// Login section 
const LoginTitle = styled.h2`
    color: #0082c9; 
`; 

const LoginButton = styled.button `
    background-color: #12B1FC;
    font-family: 'Montserrat', sans-serif;
    color: white; 
    border-radius: 10px; 
    padding: 2%; 
    width: 50%; 
    margin-bottom: 2%; 

    &:hover {
        background-color: white;
        color: #12B1FC; 
        cursor: pointer;
    }
`; 

const SignUpButton = styled.button `
    background-color: #6ce3ff; 
    font-family: 'Montserrat', sans-serif;
    color: white; 
    border-radius: 10px; 
    padding: 2%; 
    width: 50%; 

    &:hover {
        background-color: #352ecb;
        cursor: pointer;
    }
`; 

const SignInInput = styled.input`
    border: 1px solid #778899; 
    font-family: 'Montserrat', sans-serif;
    margin: 3%; 
`; 
 
class LoginForm extends React.Component {
    render() {
        return(
           <>
                <LoginWrapper>
                    <MobileLogoStyled src={MobileLogo} alt="TweetMate logo" />
                    <HeaderTitle>Tweetmate</HeaderTitle>
                    <HeaderSubtitle>Discover what your tweets say about who you are and who you should follow.</HeaderSubtitle>
                    <LoginTitle>Login</LoginTitle>
                   
                        <LoginFormWrapper>
                            <SignInInput
                                name="email"
                                type="text"
                                placeholder="Email"
                            />
                            <SignInInput
                                name="password"
                                type="password"
                                placeholder="Password"
                            />
        
                            <Link to="/search"><LoginButton>Login</LoginButton></Link>
                            <Link to="/register"><SignUpButton>Sign up</SignUpButton></Link>
                        </LoginFormWrapper>
                    
                </LoginWrapper>
           </>
            )
    }
}

export default LoginForm; 