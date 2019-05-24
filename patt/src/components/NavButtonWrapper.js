import React from 'react'; 
import LogoutButton from './LogoutButton';
import SettingsButton from './SettingsButton'; 

 import styled from 'styled-components'; 
 
 const NavButtonWrapperStyle = styled.div` 
 width: 15vw;
 padding: 0 5vw;
 display: flex;
 justify-content: space-between;
 `; 

class NavButtonWrapper extends React.Component {
  render() {
    return (
      <NavButtonWrapperStyle>
        <LogoutButton />
        <SettingsButton />
      </NavButtonWrapperStyle>
    );
  }
}



export default NavButtonWrapper; 