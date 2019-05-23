import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux'
import { login } from '../actions'
import { withRouter } from 'react-router-dom' 



import styled from 'styled-components'; 

import FullLogo from '../assets/FullLogo.png'; 

// Full page wrapper styling 
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

// Logo 
const LogoStyle = styled.img`
    /* Sizing */
    max-width: 60%; 
    height: auto; 

    margin-top: 5vh; 
`; 

// Subtitle
const HeaderSubtitle = styled.h5`
    color: #778899; 
    width: 60%; 
    margin-top: 5vh; 
`; 

// Login section 
const LoginFormWrapper = styled.form`
    display: flex; 
    flex-direction: column; 
    border: 2px solid #778899; 
    background-color: #12B1FC; 
    padding: 5%; 
    border-radius: 10%; 
    margin-top: 5vh; 
`;

const LoginTitle = styled.h2`
    color: white; 
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
        background-color: white;
        color: #6ce3ff; 
        cursor: pointer;
    }
`; 

const SignInInput = styled.input`
    border: 1px solid #778899; 
    font-family: 'Montserrat', sans-serif;
    margin: 3%; 
`; 
 
class LoginForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }
    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }
    login = e => {
        e.preventDefault()
        console.log(this.state.credentials)
        this.props.login(this.state.credentials)
            .then(() => {
                this.timeOut()
            })
    }
    timeOut = () => {
        {this.props.message && setTimeout(() => 
            this.props.history.push('/search')
              , 2000)}
    }
    render() {
        return(
                <LoginWrapper>
                    <LogoStyle src={FullLogo} alt="TweetMate logo" />
                    <HeaderSubtitle>Discover what your tweets say about who you are and who you should follow.</HeaderSubtitle>
                    
                   
                        <LoginFormWrapper onSubmit={this.login}>
                        <LoginTitle>Login</LoginTitle>
                            <SignInInput
                                name="username"
                                type="text"
                                placeholder="Username"
                                onChange={this.handleChanges}
                            />
                            <SignInInput
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={this.handleChanges}
                            />
        
                            <LoginButton onClick={this.login}>Login</LoginButton>
                            <Link to="/register"><SignUpButton>Sign up</SignUpButton></Link>
                        </LoginFormWrapper>
                     {this.props.message && <p>{this.props.message}</p>}
                    {this.props.error && <p>{this.props.error}</p>}
                </LoginWrapper>
            )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    error: state.error,
    message: state.message
})

export default connect(
    mapStateToProps,
    { login }
)(withRouter(LoginForm)); 