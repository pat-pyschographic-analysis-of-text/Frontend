import React from 'react'; 
import {Link} from 'react-router-dom'; 
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import styled from 'styled-components'; 

const SettingsButtonStyle = styled.i`
    font-size: 1.25rem; 
    position: fixed; 
    top: 0; 
    right: 4vw; 
    margin-right: 8vw; 
    margin-top: 3vw; 
    color: grey; 
    /* Adding z-index to keep above everything else  */
    z-index: 10; 
`; 

class SettingsButton extends React.Component {
    render() {
        return(
            <>
            <Link to="/settings">
                <SettingsButtonStyle><i className="fas fa-cog"></i></SettingsButtonStyle>
            </Link>
            </>
        )
    }
}

export default SettingsButton; 