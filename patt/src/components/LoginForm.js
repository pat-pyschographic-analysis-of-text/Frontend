import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux'
import { login } from '../actions'
import { withRouter } from 'react-router-dom' 

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }
    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }
    login = e => {
        e.preventDefault()
        console.log(this.state.credentials)
        this.props.login(this.state.credentials)
            .then(() => {
                this.timeOut()
            })
    }
    timeOut = () => {
        {this.props.message && setTimeout(() => 
            this.props.history.push('/search')
              , 2000)}
    }
    render() {
        return(
           <>
                <h1>Login</h1>
                <form onSubmit={this.login}>
                    <input
                        name="username"
                        type="text"
                        placeholder="email"
                        onChange={this.handleChanges}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={this.handleChanges}
                    />

                    <Link to="/search"><button onClick={this.login}>Login</button></Link>
                    {this.props.message && <p>{this.props.message}</p>}
                    {this.props.error && <p>{this.props.error}</p>}
                </form>
           </>
            )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    error: state.error,
    message: state.message
})

export default connect(
    mapStateToProps,
    { login }
)(withRouter(LoginForm)); 