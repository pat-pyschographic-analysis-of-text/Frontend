// React and Redux components we need 
import React from 'react'; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import styled from 'styled-components'; 

// Actions 
import { logout } from '../actions'; 

// Setting up LogoutButtonWrapper as styled component 
const LogoutButtonWrapper = styled.i`
`; 

class LogoutButton extends React.Component {
    
    // Function that performs our logout action on click 
    logout = e => {
        e.preventDefault()
        this.props.logout()
        this.props.history.push('/')
    }

    render() {
        return (
            <LogoutButtonWrapper onClick={this.logout}>
                <i className="fas fa-sign-out-alt fa-2x"></i>
            </LogoutButtonWrapper>
        )
    }
}

export default connect(
    null, 
    { logout }
)(withRouter(LogoutButton))
