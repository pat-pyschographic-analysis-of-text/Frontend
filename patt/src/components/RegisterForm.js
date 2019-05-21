import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux'
import { register } from '../actions'
 
class RegisterForm extends React.Component {
  state =  {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChanges = e => {
    this.setState({
      credentials : {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  register = e => {
    e.preventDefault()
    console.log(this.state.credentials)
    this.props.register(this.state.credentials)
  }
    render() {
        return (
          <>
            <h1>Create an account</h1>
            <form onSubmit={this.props.register}>
              <input 
              name="username" 
              type="text" 
              placeholder="email" 
              onChange={this.handleChanges}
              />

              {/* <input
                name="username"
                type="text"
                placeholder="username"
                onChange={this.handleChanges}
              /> */}
              <input
                name="password"
                type="password"
                placeholder="password"
                onChange={this.handleChanges}
              />

              <Link to="/search"><button onClick={this.register}>Create account</button></Link>
            </form>
          </>
        );
    }
}

const mapStateToProps = state => ({
  registering: state.registering,
  error: state.error
})

export default connect(
  mapStateToProps,
  { register }
)(RegisterForm); 