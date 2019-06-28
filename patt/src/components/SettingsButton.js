import React from 'react'; 
import {Link} from 'react-router-dom'; 
import styled from 'styled-components'; 

const SettingsButtonStyle = styled.i`

`; 

class SettingsButton extends React.Component {
    render() {
        return(
            <>
            <Link to="/settings">
                <SettingsButtonStyle><i className="fas fa-cog fa-2x"></i></SettingsButtonStyle>
            </Link>
            </>
        )
    }
}

export default SettingsButton; 