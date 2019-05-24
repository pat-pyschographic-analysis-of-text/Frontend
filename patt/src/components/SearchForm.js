import React from 'react'; 
import { Link } from 'react-router-dom'; 

import styled from 'styled-components'; 



// Importing things we need for Search 
import { connect } from 'react-redux'; 
import { searching, searchInput } from '../actions'; 
import { withRouter } from 'react-router-dom'; 



// Header parts 
const Header = styled.div`
display: flex;
align-items: center;
justify-content: center;
`; 



const SearchBar = styled.input`
border-radius: 50px;
width: 25vw;
height: 5vh;
padding-left: 10%;
`; 

const SearchButton = styled.button`
border-radius: 50px;
/* margin: 0% 0px; */
z-index: 2;
height: 5vh;
background: #12B1FC;
color: white;
margin-left: 15%
  &:hover {
    background: #0082c9;

  }
`; 

class SearchForm extends React.Component {

  // Setting username state to an empty string
  state = {
    username: '', 
  }

  // Handle changes function watches what our user types in 
  handleChanges = e => {
    this.setState({
      username: e.target.value
    })
  }

  // Search function calls our action 
  search = e => {
    e.preventDefault()
    let username = this.state.username;

    if(username.charAt(0)==='@') {
      username = username.substr(1)
    }
    
    if(15 < username.length || username.length < 4) {
      window.alert('Please provide a valid twitter handle to search')
    } else {
      this.props.searching(username)
    }
  }

  // TimeOut gives our user a message in a certain amount of time 

  timeOut = () => {
    {this.props.message &&
    setTimeout(() => 
  this.props.history.push('/search-results')
, 1000)}
  }

    render() {
        return (

          <>
            <Header>
              <form onSubmit={this.search} style={{padding: '5%'}}>
  
                <p style={{
                  zIndex: '5',
                  display: 'inherit',
                  position: 'fixed',
                  margin: '.4vh .5vw',
                  fontSize: '1.7em',
                }}>@</p><SearchBar
                  name="search"
                  type="text"
                  placeholder="Enter Twitter handle"
                  onChange={this.handleChanges}
                />
              </form>
  
                  <SearchButton onClick={this.search}>
                    Search
                  </SearchButton>
            </Header>
          </>
        );
    }
}

const mapStateToProps = state => ({
  searchLoaded: state.searchLoaded,
  searching: state.searching, 
  compareResults: state.compareSearches,
  error: state.error, 
  message: state.message,
  username: state.username
})

export default connect(mapStateToProps, {searching, searchInput}
  ) (withRouter(SearchForm)); 