import React from 'react'; 
import { logout } from '../actions'; 
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom'; 

import styled from 'styled-components'; 

const LogoutButtonWrapper = styled.i`
    font-size: 1.5rem; 
    position: fixed; 
    top: 0;
    right: 0;
    margin: 3vw; 
    color: grey; 
    z-index: 10; 
`; 

class LogoutButton extends React.Component {
    logout = e => {
        e.preventDefault()
        this.props.logout()
        this.props.history.push('/')
    }

    render() {
        return (
            <LogoutButtonWrapper onClick={this.logout}>
                <i className="fas fa-sign-out-alt"></i>
            </LogoutButtonWrapper>
        )
    }
}

export default connect(
    null, 
    { logout }
)(withRouter(LogoutButton))
