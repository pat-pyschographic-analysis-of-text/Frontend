import React from "react";
import styled from "styled-components";

import LogoutButton from "./LogoutButton";
import SettingsButton from "./SettingsButton";

const NavButtonWrapperStyle = styled.div`
  width: 15vw;
  padding: 0 5vw;
  display: flex;
  justify-content: space-between;
`;

// Wraps our button specifically 
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
