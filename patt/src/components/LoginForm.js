import React from 'react'; 
import { Link } from 'react-router-dom'; 
 
class LoginForm extends React.Component {
    render() {
        return(
           <>
                <h1>Login</h1>
                <form>
                    <input
                        name="email"
                        type="text"
                        placeholder="email"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                    />

                    <Link to="/search"><button>Login</button></Link>
                </form>
           </>
            )
    }
}

export default LoginForm; 