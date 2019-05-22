import React from 'react'; 
import {Link} from 'react-router-dom'; 

import styled from 'styled-components'; 

const SettingsButtonStyle = styled.i`
    font-size: 1.5rem; 
    position: fixed; 
    top: 0; 
    right: 0; 
    margin: 2vw; 
    color: grey; 
    
    /* Adding z-index to keep above everything else  */
    z-index: 10; 
     
`; 

export default function SettingsButton () {
    return(
        <>
        <Link to="/settings">
            <SettingsButtonStyle><i class="fas fa-cog"></i></SettingsButtonStyle>
        </Link>
        </>
    )
}