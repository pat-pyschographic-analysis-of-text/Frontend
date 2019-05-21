import React from 'react'; 
import { Link } from 'react-router-dom'; 

import styled from 'styled-components'; 

import MobileLogo from '../assets/MobileLogo.png';

// Overall Component styling 

const UpdateWrapper = styled.div`
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

const UpdateFormWrapper = styled.form`
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

const LogoutButton = styled.button `
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
 
class UpdateForm extends React.Component {
    render() {
        return (
          <UpdateWrapper>
            <MobileLogoStyled src={MobileLogo} alt="TweetMate logo" />
            <HeaderTitle>Update Profile</HeaderTitle>
            
            <UpdateFormWrapper>
              
              <UpdateInput 
              name="email" 
              type="text" 
              placeholder="Email" 
              />

              <UpdateInput
                name="username"
                type="text"
                placeholder="Username"
              />

              <UpdateInput
                name="password"
                type="password"
                placeholder="Password"
              />

              <Link to="/search"><UpdateButton>Update profile</UpdateButton></Link>
              <Link to="/"><LogoutButton>Logout</LogoutButton></Link>
            </UpdateFormWrapper>
          </UpdateWrapper>
        );
    }
}

export default UpdateForm; 