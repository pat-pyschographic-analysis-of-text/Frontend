import React from "react";
import styled from 'styled-components'; 
import MobileLogo from '../assets/MobileLogo.png'; 
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux'
import { searching } from '../actions'
import SingleUserTraitsGraph from './SingleUserTraitsGraph'
import TraitsLegend from './TraitsLegend'

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
    display: flex;
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

const TabNavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    min-width: 60vw;
`

const TabNav = styled.div`
    padding: 2vh 5vw;
`

class DataCard extends React.Component {
  state = {
    displayedData: 'Personality'
  }
  componentDidMount() {
    this.props.searching(`${this.props.username}`)
  }
  clickHandler = e => {
    e.preventDefault()
    this.setState({
      displayedData: e.target.id,
    })
  }
  dataProviderLogic = dataName => {
    if (dataName === 'Personality') {
      return this.props.searchResults.personality
    } else if (dataName === 'Needs') {
      return this.props.searchResults.needs
    } else if (dataName === 'Values') {
      return this.props.searchResults.values
    }
  }

  render() {
    return (
      <DataCardWrapper>
        {!this.props.searchLoaded && <p>'Making a very impressive request to our AI. Calculating live scores now...'</p>}
        {this.props.searchLoaded && 
        <>
        <HeaderTitle>@{this.props.searchResults.username}</HeaderTitle>
        <TabNavWrapper>
          <TabNav id="Personality" onClick={this.clickHandler}>
            Personality
          </TabNav>
          <TabNav id="Values" onClick={this.clickHandler}>
            Values
          </TabNav>
          <TabNav id="Needs" onClick={this.clickHandler}>
            Needs
          </TabNav>
          </TabNavWrapper>
          <div>
            {this.state.displayedData && <SingleUserTraitsGraph data={this.dataProviderLogic(this.state.displayedData)} /> }
          </div>
        <div>
        {this.state.displayedData}
        <TraitsLegend profilePic={this.props.searchResults.image_url} data={this.dataProviderLogic(this.state.displayedData)}/>
        </div>
        </>
        }
      </DataCardWrapper>
    );
  }
}



const mapStateToProps = state => {
  return {
  error: state.error,
  searching: state.searching,
  searchResults: state.searchResults,
  searchInput: state.searchInput,
  username: state.username,
  searchLoaded: state.searchLoaded,
}}

export default connect(
  mapStateToProps,
  { searching }
)(DataCard);
