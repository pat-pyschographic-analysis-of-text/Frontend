import React from 'react'; 
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 

// Importing parts that will wire up Update action 
import {connect} from 'react-redux'; 
import { updateProfile, deleteProfile } from '../actions'; 
import { withRouter } from 'react-router-dom'; 

import MobileLogo from '../assets/MobileLogo.png';
import NavButtonWrapper from './NavButtonWrapper';

// Overall Component styling 
const SettingsWrapper = styled.div`
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

const HeaderTitle = styled.h2`
    color: #0082c9; 
`; 

const SettingsFormWrapper = styled.form`
display: flex;
flex-direction: column;
`; 

// Logo 
const MobileLogoStyled = styled.img`
    max-width: 30%; 
    height: auto; 
`; 

const UpdateInput = styled.input`
border: 1px solid #778899; 
font-family: 'Montserrat', sans-serif;
margin: 3%; 
`; 

const UpdateButton = styled.button `
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

const DeleteButton = styled.button `
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

 
class SettingsForm extends React.Component {
  // Setting state to what our server needs to receive
  state = {
    profileUpdates: {
      username: ""
    }
  };

  // Change handler function
  handleChanges = e => {
    this.setState({
      profileUpdates: {
        ...this.state.profileUpdates,
        [e.target.name]: e.target.value
      }
    });
  };

  // Function that will update Profile
  updateProfile = e => {
    e.preventDefault();
    // Setting new variable so can add id later 
    const profileUpdates = this.state.profileUpdates; 

    // adding user ID to the object 
    profileUpdates.id = this.props.userId; 

    console.log(profileUpdates);

    this.props.updateProfile(profileUpdates).then(() => {
     this.timeOut();
   });
  };

  // Sends a message to the user about updating status, and redirects only if the update was successful
  timeOut = () => {
    {
      this.props.message &&
        setTimeout(() => this.props.history.push("/search"), 2000);
    }
  };

  //Function that deletes a profile

  deleteProfile = e => {
    e.preventDefault();
    this.props.deleteProfile(this.props.userId).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <SettingsWrapper>
        <MobileLogoStyled src={MobileLogo} alt="TweetMate logo" />
        <NavButtonWrapper /> 
        <HeaderTitle>Update Username</HeaderTitle>

        <SettingsFormWrapper onSubmit={this.updateProfile}>

          <UpdateInput
            name="username"
            type="text"
            placeholder="Username"
            onChange={this.handleChanges}
          />

          <Link to="/search">
            <UpdateButton onClick={this.updateProfile}>
              Update Username
            </UpdateButton>
          </Link>

          <Link to="/">
            <DeleteButton onClick={this.deleteProfile}>Delete Profile</DeleteButton>
          </Link>
        </SettingsFormWrapper>
      </SettingsWrapper>
    );
  }
}

const mapStateToProps = state => ({
  updating: state.updating, 
  message: state.message,
  error: state.error, 
  userId: state.userId
})

// Using connect function to pass our actions in as props to this Form 
export default connect(
  mapStateToProps,
   {updateProfile, deleteProfile}
   ) (withRouter(SettingsForm)); 