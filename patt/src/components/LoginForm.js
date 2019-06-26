// React and Redux components we need
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";
import styled from "styled-components";

// Our actions and assets
import { login } from "../actions";
import FullLogo from "../assets/FullLogo.png";

// Styling starts //

// Full page wrapper styling
const LoginWrapper = styled.div`
  background-color: white;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;

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
  align-items: center;
  border: 2px solid #778899;
  background-color: #12b1fc;
  padding: 5%;
  border-radius: 10px;
  margin-top: 5vh;
`;

const LoginTitle = styled.h2`
  color: white;
`;

const SignInInput = styled.input`
  border: 1px solid #778899;
  font-family: "Montserrat", sans-serif;
  padding: 1vh;
  margin: 3%;
`;

const LoginButton = styled.button`
  background-color: white;
  font-family: "Montserrat", sans-serif;
  color: #12b1fc;
  border-radius: 10px;
  padding: 2%;
  margin-bottom: 2vh;
  margin-top: 2vh;
  width: 50%;

  &:hover {
    background-color: #12b1fc;
    color: white;
    cursor: pointer;
  }
`;

const SignUpButton = styled.button`
  background-color: #6ce3ff;
  font-family: "Montserrat", sans-serif;
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

const LoginMessage = styled.div`
  width: 100%;
  height: 5vh;
`;

// Styling ends //

class LoginForm extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };
  // Setting state to whatever the user enters
  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    // console.log(this.state.credentials)
    this.props.login(this.state.credentials).then(() => {
      this.timeOut();
    });
  };

  // Once the user logins, this pushes our user to the search page.
  timeOut = () => {
    {
      this.props.message &&
        setTimeout(() => this.props.history.push("/search"), 2000);
    }
  };
  // Prevents page reload on click and also navigates to register.
  // We did this so that we avoided a styling issue when we added in a Link.
  signUpHandler = e => {
    e.preventDefault();
    this.props.history.push("/register");
  };

  render() {
    const { message, error } = this.props;

    return (
      <LoginWrapper>
        <video
          className="background-video hero-bg-video is-playing"
          loop="loop"
          autoPlay="autoplay"
          muted="muted"
          id="bgvid"
        >
          <source
            src="https://static.videezy.com/system/resources/previews/000/035/952/original/4K_2018.12.05_Sunset_Light_adjust.mp4"
            type="video/mp4"
          />
        </video>

        <LogoStyle src={FullLogo} alt="TweetMate logo" />

        <HeaderSubtitle>
          Discover what your tweets say about who you are and who you should
          follow.
        </HeaderSubtitle>

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

          {this.props.loggingIn ? (
            <LoginButton onClick={this.login}>
              <Loader type="ThreeDots" color="blue" height="12" width="26" />
            </LoginButton>
          ) : (
            <LoginButton onClick={this.login}>Login</LoginButton>
          )}

          <SignUpButton onClick={this.signUpHandler}>Sign up</SignUpButton>
        </LoginFormWrapper>

        <LoginMessage>
          {message && <p>{message}</p>}
          {typeof error === "string" && <p>{error}</p>}
        </LoginMessage>
      </LoginWrapper>
    );
  }
}

const mapStateToProps = state => ({
  loggingIn: state.loggingIn,
  error: state.error,
  message: state.message
});

export default connect(
  mapStateToProps,
  { login }
)(withRouter(LoginForm));
