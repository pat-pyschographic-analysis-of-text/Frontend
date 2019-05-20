import React from 'react'; 
 
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

              <button>Update profile</button>
            </form>
          </>
        );
    }
}

export default UpdateForm; 