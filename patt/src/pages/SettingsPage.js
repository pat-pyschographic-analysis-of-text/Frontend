import React from 'react'; 
import { SettingsForm } from '../components'; 
import { connect } from 'react-redux' 
import { withRouter } from 'react-router-dom'
import { logout, deleteProfile } from '../actions'
 
class SettingsPage extends React.Component {
    deleteProfile = e => {
        e.preventDefault()
        this.props.deleteProfile(this.props.userId)
            .then(() => {
                this.props.history.push('/')
            })
    }
    render() {
        return(
            <> 
            <SettingsForm />
            </> 
        )
    }
}

const mapStateToProps = state => ({
    message: state.message,
    userId: state.userId
})

export default connect(
    mapStateToProps,
    { logout, deleteProfile }
)(withRouter(SettingsPage)); 