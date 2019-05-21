import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux'
import { login, testing } from '../actions'
 
class LoginForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }
    componentDidMount() {
        this.props.testing({username: 'jaymaas-dev'})
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
                </form>
           </>
            )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    error: state.error
})

export default connect(
    mapStateToProps,
    { login, testing }
)(LoginForm); 