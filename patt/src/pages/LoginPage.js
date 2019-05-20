import React from 'react'; 
import { LoginForm } from '../components'; 
import { Link } from 'react-router-dom'; 
 
class LoginPage extends React.Component {
    render() {
        return(
            <> 
            <LoginForm /> 
            <Link to="/register"><button>Create account</button></Link>
            </> 

            )
    }
}

export default LoginPage; 