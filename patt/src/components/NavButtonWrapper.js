import React from 'react'; 
import LogoutButton from './LogoutButton';
import SettingsButton from './SettingsButton'; 

 import styled from 'styled-components'; 
 
 const NavButtonWrapperStyle = styled.div`
  width: 100%;
  display: flex; 
  
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