import React from 'react'; 
import { logout } from '../actions'; 
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom'; 

import styled from 'styled-components'; 

const LogoutButtonWrapper = styled.i`

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
