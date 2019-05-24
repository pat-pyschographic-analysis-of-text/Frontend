import React from 'react'; 
import styled from 'styled-components'; 
import { connect } from 'react-redux';
import { register } from '../actions';
import { withRouter } from 'react-router-dom'; 

import Loader from 'react-loader-spinner';

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

    @media (min-width: 500px) {
        border: 2px solid #778899; 
        border-radius: 10px; 
        padding-bottom: 10vh; 
        max-width: 30%; 
        margin-top: 7vh; 
    }
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

const RegisterMessage = styled.div`
  width: 100%; 
  height: 5vh; 
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
            <video
              class="background-video hero-bg-video is-playing"
              loop="loop"
              autoplay="autoplay"
              muted="muted"
              id="bgvid"
            >
              <source
                src="https://static.videezy.com/system/resources/previews/000/035/952/original/4K_2018.12.05_Sunset_Light_adjust.mp4"
                type="video/mp4"
              />
            </video>

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

              { this.props.registering ? <RegisterButton onClick={this.register}>
                Sign up<Loader
                type="ThreeDots"
                color="#1f2a38"
                height="12"
                width="26"
              /></RegisterButton> : <RegisterButton onClick={this.register}>Sign up</RegisterButton>}
            </RegisterFormWrapper>

            <RegisterMessage>
              {this.props.message !== "Successfully logged out" && <p>{this.props.message}</p>}
              {typeof this.props.error === 'string' && <p>{this.props.error}</p>}
            </RegisterMessage>

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