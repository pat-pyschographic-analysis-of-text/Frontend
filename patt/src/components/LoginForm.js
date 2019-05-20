import React from 'react'; 
 
class LoginForm extends React.Component {
    render() {
        return(
           <>
                <h1>Login</h1>
                <form>
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

                    <button>Login</button>
                </form>
           </>
            )
    }
}

export default LoginForm; 