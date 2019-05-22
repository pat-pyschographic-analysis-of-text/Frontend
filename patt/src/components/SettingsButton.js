import React from 'react'; 
import {Link} from 'react-router-dom'; 
import { logout } from '../actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import styled from 'styled-components'; 

const SettingsButtonStyle = styled.i`
    font-size: 1.5rem; 
    position: fixed; 
    top: 0; 
    right: 4vw; 
    margin: 3vw; 
    color: grey; 
    
    /* Adding z-index to keep above everything else  */
    z-index: 10; 
     
`; 

const LogOutButton = styled(SettingsButtonStyle)`
    right: 0;
`


class SettingsButton extends React.Component {
    logout = e => {
    e.preventDefault()
    this.props.logout()
    this.props.history.push('/')
    }
    render() {
        return(
            <>
            <Link to="/settings">
                <SettingsButtonStyle><i className="fas fa-cog"></i></SettingsButtonStyle>
            </Link>
                <LogOutButton onClick={this.logout}><i className="fas fa-sign-out-alt"></i></LogOutButton>
            </>
        )
    }
}

export default connect(
    null,
    { logout }
)(withRouter(SettingsButton))