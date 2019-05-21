import React from 'react'; 
import {Link} from 'react-router-dom'; 

import styled from 'styled-components'; 

const SettingsButtonStyle = styled.i`
    font-size: 1.5rem; 
    margin-left: 90%; 
    margin-top: 5%; 
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