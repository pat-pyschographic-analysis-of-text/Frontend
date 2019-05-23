import React from 'react'; 
import { Link } from 'react-router-dom'; 

import styled from 'styled-components'; 

import MobileLogo from '../assets/MobileLogo.png';

// Importing things we need for Search 
import { connect } from 'react-redux'; 
import { searching } from '../actions'; 
import { withRouter } from 'react-router-dom'; 
import NavButtonWrapper from './NavButtonWrapper';


// Header parts 
const Header = styled.div`
    background-color: white; 
    max-width: 500px; 
    width: 100%; 
    display: flex; 
    flex-direction: row;  
    align-items: center;  
    justify-content: space-around; 
    margin-top: 5vw; 
    font-family: 'Montserrat', sans-serif;

    @media (min-width: 500px) {
        margin: 0 auto; 
        max-width: 800px; 
    }
`; 

const HeaderLogo = styled.img`
    max-width: 25%; 
    height: auto; 

    @media (min-width: 500px) {
        max-width: 20%; 
    }
`; 

const SearchBar = styled.input`
  font-family: 'Montserrat', sans-serif;
  padding: 5%; 
  border: 2px solid #778899; 
  min-width: 25vw;

`; 

const SearchButton = styled.button`
  background-color: #12B1FC;
  font-family: "Montserrat", sans-serif;
  color: white;
  border-radius: 10px;
  padding: 10%;
  margin: 0 2vw; 

  &:hover {
    background-color: white;
    color: #12B1FC; 
    cursor: pointer;
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
      username: {
        ...this.state.username, 
        [e.target.name]: e.target.value
      }
    })
  }

  // Search function calls our action 
  search = e => {
    e.preventDefault()
    this.props.grabSearchInput(this.state.username.search)
    console.log(this.state.username.search); 
    this.props.searching(this.state.username.search)
      .then(() => {
        this.timeOut()
      })
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
            <NavButtonWrapper />
            <Header>
              <HeaderLogo src={MobileLogo} alt="TweetMate logo" />
  
              <form onSubmit={this.search}>
  
                <SearchBar
                  name="search"
                  type="text"
                  placeholder="Enter Twitter handle"
                  onChange={this.handleChanges}
                />
              </form>
  
              <Link to="/search-results">
                  <SearchButton onClick={this.search}>
                    Search
                  </SearchButton>
                </Link>
            </Header>
          </>
        );
    }
}

const mapStateToProps = state => ({
  searching: state.searching, 
  error: state.error, 
  message: state.message
})

export default connect(mapStateToProps, {searching}
  ) (withRouter(SearchForm)); 