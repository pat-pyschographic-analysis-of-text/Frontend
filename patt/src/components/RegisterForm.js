import React from 'react'; 
 
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

              <button>Create account</button>
            </form>
          </>
        );
    }
}

export default RegisterForm; 