import React from 'react'; 
import { Link } from 'react-router-dom'; 

import styled from 'styled-components'; 

import MobileLogo from '../assets/MobileLogo.png';

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
`; 

// Logo 
const MobileLogoStyled = styled.img`
    max-width: 30%; 
    height: auto; 
`; 

const HeaderTitle = styled.h2`
    color: #0082c9; 
`; 

const HeaderSubtitle = styled.h5`
    color: #778899; 
    width: 60%; 
`; 
 
const SearchFormWrapper = styled.form`
display: flex; 
flex-direction: column; 
align-items: center; 
`; 

const SearchBar = styled.input`
  width: 100%; 
  font-family: 'Montserrat', sans-serif;
  padding: 5%; 
  border: 2px solid #778899; 
`; 

const SeeDataButton = styled.button`
  background-color: #12B1FC;
  font-family: "Montserrat", sans-serif;
  color: white;
  border-radius: 10px;
  padding: 10%;
  margin-top: 50%; 
  max-width: 500px; 
  width: 100%;

  &:hover {
    background-color: white;
    color: #12B1FC; 
    cursor: pointer;
  }
`; 

class SearchForm extends React.Component {
    render() {
        return (
          <SearchWrapper>
            <MobileLogoStyled src={MobileLogo} alt="TweetMate logo" />
            <HeaderTitle>Find a Tweetmate</HeaderTitle>
            <HeaderSubtitle>
              Enter a user's Twitter handle to learn what their tweets say about their personality and who else tweets like they do. 
            </HeaderSubtitle>
            
            <SearchFormWrapper>
              <SearchBar
                name="search"
                type="text"
                placeholder="Enter Twitter handle"
              />

              <Link to="/search-results">
                <SeeDataButton>Get data</SeeDataButton>
              </Link>
            </SearchFormWrapper>

          </SearchWrapper>
        );
    }
}

export default SearchForm; 