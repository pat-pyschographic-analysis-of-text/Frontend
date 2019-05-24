import React from 'react'; 
import { LoginForm } from '../components'; 
 
class LoginPage extends React.Component {
    render() {
        return(
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}> 
            <LoginForm /> 
            </div> 

            )
    }
}

export default LoginPage; 