import React from 'react'; 
import { Link } from 'react-router-dom'; 
 
class RegisterForm extends React.Component {
    render() {
        return (
          <>
            <h1>Create an account</h1>
            <form>
              <input 
              name="email" 
              type="text" 
              placeholder="email" 
              />

              <input
                name="username"
                type="text"
                placeholder="username"
              />
              <input
                name="password"
                type="password"
                placeholder="password"
              />

              <Link to="/search"><button>Create account</button></Link>
            </form>
          </>
        );
    }
}

export default RegisterForm; 