import React from "react";

import styled from 'styled-components'; 

import MobileLogo from '../assets/MobileLogo.png'; 

import { Link } from 'react-router-dom'; 

const DataCardWrapper = styled.div`
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

// For refactoring: create a custom React component that takes prop, and those props will be string of title
const HeaderTitle = styled.h2`
    color: #0082c9; 
`; 

// Logo 
const MobileLogoStyled = styled.img`
    max-width: 30%; 
    height: auto; 
`; 

const SearchAgainButton = styled.button `
    background-color: #12B1FC;
    font-family: 'Montserrat', sans-serif;
    color: white; 
    border-radius: 10px; 
    padding: 2%; 
    width: 50%; 
    margin-bottom: 2%; 

    &:hover {
        background-color: white;
        color: #12B1FC; 
        cursor: pointer;
    }
`; 

class DataCard extends React.Component {
  render() {
    return (
      <DataCardWrapper>
        <MobileLogoStyled src={MobileLogo} alt="TweetMate logo" />
        <HeaderTitle>@Username analysis</HeaderTitle>
        <div>
          <p>Placeholder for description</p>
        </div>

        <Link to="/search">
          <SearchAgainButton>Search again</SearchAgainButton>
        </Link>

      </DataCardWrapper>
    );
  }
}

export default DataCard;
