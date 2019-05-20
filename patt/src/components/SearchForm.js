import React from 'react'; 
import { Link } from 'react-router-dom'; 
 
class SearchForm extends React.Component {
    render() {
        return (
          <>
            <h1>Search for a Twitter user</h1>
            <h4>
              This app will return some suggested users based on another
              user's profile.
            </h4>
            <form>
              <input
                name="search"
                type="text"
                placeholder="Search for a Twitter user"
              />

              <Link to="/search-results">
                <button>Get user data</button>
              </Link>
            </form>
          </>
        );
    }
}

export default SearchForm; 