import React from 'react'; 
import LogoutButton from './LogoutButton';
import SettingsButton from './SettingsButton'; 

 import styled from 'styled-components'; 
 
 const NavButtonWrapperStyle = styled.div`
 
 `; 

 const NavDisplayName= styled.div`
 color: #6ce3ff;
 position: fixed;
 top: 0;
 right: 0;
 margin-right: 4vw;
 margin-top: 6vw;
 font-weight: 700;
 font-size: 1.8em;
 `

class NavButtonWrapper extends React.Component {
  render() {
    return (
      <NavButtonWrapperStyle>
        <NavDisplayName>{this.props.displayName}</NavDisplayName>
        <LogoutButton />
        <SettingsButton />
      </NavButtonWrapperStyle>
    );
  }
}

export default NavButtonWrapper; 