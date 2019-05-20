import React from 'react'; 
import { Link } from 'react-router-dom'; 
 
class UpdateForm extends React.Component {
    render() {
        return (
          <>
            <h1>Update Profile</h1>
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

              <Link to="/search"><button>Update profile</button></Link>
            </form>
          </>
        );
    }
}

export default UpdateForm; 