import React from 'react'; 
import { Link } from 'react-router-dom'; 

import styled from 'styled-components'; 

import MobileLogo from '../assets/MobileLogo.png';

// Importing things we need for Search 
import { connect } from 'react-redux'; 
import { searching, searchInput } from '../actions'; 
import { withRouter } from 'react-router-dom'; 
import NavButtonWrapper from './NavButtonWrapper';

// Overall Component styling 
const SearchWrapper = styled.div`
    background-color: white; 
    max-width: 500px; 
    width: 100%; 
    margin: 0 auto; 
    display: flex; 
    flex-direction: column; 
    text-align: center; 
    align-items: center; 
    font-family: 'Montserrat', sans-serif;
    height: 15vh;
    flex-direction: row;
    display: flex;
    width: 100%;
    margin: 0;
`; 

// Logo 
const MobileLogoStyled = styled.img`
    max-width: 30%; 
    height: auto; 
`; 

const HeaderTitle = styled.h2`
    color: #0082c9;
    font-size: 1em; 
    margin-right: 2.5vw;
`; 

const HeaderSubtitle = styled.h5`
    color: #778899; 
    width: 60%; 
`; 
 
const SearchFormWrapper = styled.form`
display: flex; 
flex-direction: row; 
align-items: center; 
`; 

const SearchBar = styled.input`
  width: 100%; 
  font-family: 'Montserrat', sans-serif;
  padding: 5%; 
  border: 2px solid #778899; 
  min-width: 25vw;
`; 

const SeeDataButton = styled.button`
  background-color: #12B1FC;
  font-family: "Montserrat", sans-serif;
  color: white;
  border-radius: 10px;
  padding: 10%;
  margin: 0 2vw; 
  max-width: 500px; 
  width: 100%;

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
          <SearchWrapper>
            <NavButtonWrapper /> 
            <MobileLogoStyled src={MobileLogo} alt="TweetMate logo" />
            
            <div style={{display: 'flex'}}>
              <HeaderTitle>Find a Tweetmate</HeaderTitle>
              {/* <HeaderSubtitle>
                Enter a user's Twitter handle to learn what their tweets say about their personality and who else tweets like they do. 
              </HeaderSubtitle> */}
              
              <SearchFormWrapper onSubmit={this.search}>
                <SearchBar
                  name="search"
                  type="text"
                  placeholder="Enter Twitter handle"
                  onChange={this.handleChanges}
                />
                <Link to="/search-results">
                  <SeeDataButton onClick={this.search}>{this.props.searchLoaded?'Get data':'Searching...'}</SeeDataButton>
                </Link>
              </SearchFormWrapper>
            </div>
          </SearchWrapper>
        );
    }
}

const mapStateToProps = state => ({
  searchLoaded: state.searchLoaded,
  searching: state.searching, 
  compareResults: state.compareSearches,
  error: state.error, 
  message: state.message
})

export default connect(mapStateToProps, {searching, searchInput}
  ) (withRouter(SearchForm)); 