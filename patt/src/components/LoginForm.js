import React from 'react'; 
import { Link } from 'react-router-dom'; 

import styled from 'styled-components'; 

import MobileLogo from '../assets/MobileLogo.png'; 

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

const MobileLogoStyled = styled.img`
    max-width: 30%; 
    height: auto; 
`; 

const HeaderTitle = styled.h2`
    color: #352ecb; 
`; 

const HeaderSubtitle = styled.h5`
    color: #745AFF; 
    width: 60%; 
`; 

const LoginTitle = styled.h2`
    color: #0082c9; 
`; 

const LoginButton = styled.button `
    background-color: #6ce3ff;

    &:hover {
        background-color: #0082c9;
        cursor: pointer;
    }
`; 

const SignUpButton = styled.button `
    background-color: #ac88ff; 

    &:hover {
        background-color: #352ecb;
        cursor: pointer;
    }
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
                            <input
                                name="email"
                                type="text"
                                placeholder="email"
                            />
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
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