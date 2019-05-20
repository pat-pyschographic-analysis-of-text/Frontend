import React from 'react'; 
 
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

                    <button>Login</button>
                </form>
           </>
            )
    }
}

export default LoginForm; 