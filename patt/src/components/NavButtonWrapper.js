import React from 'react'; 
import LogoutButton from './LogoutButton';
import SettingsButton from './SettingsButton'; 

// import styled from 'styled-components'; 

class NavButtonWrapper extends React.Component {
  render() {
    return (
      <>
        <LogoutButton />
        <SettingsButton />
      </>
    );
  }
}

export default NavButtonWrapper; 