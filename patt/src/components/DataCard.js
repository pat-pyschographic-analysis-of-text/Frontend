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

const StyledLoadingMessage = styled.div`
  z-index: 5;
  margin: 0 auto;
  text-align: center;
  padding-top: 10vh; 
  font-family: 'Montserrat', sans-serif;
`;     


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
    // SKIP THIS AT FIRST
    // cannot declare a deconstructed object here because searchResults comes off of this.props and the compiler goes top to bottom 
    // const { username, image_url,  } = searchResults


    // START READING HERE
    //anthing that comes off of this.props, we are going to deconstruct into an object literal so we can make our JSX more readable, assign as a const *non-mutable* 
    const { searchLoaded, searchResults } = this.props


 //anthing that comes off of this.state, we are going to deconstruct into an object literal so we can make our JSX more readable, assign as a const *non-mutable* 
    const { displayedData } = this.state


 //anthing that comes off of searchResults(can be thought of this.props.searchResults, but since we deconstructed it above, we can extend of it like so...however if this was defined above it would cause an error, see example), we are going to deconstruct into an object literal so we can make our JSX more readable, assign as a const *non-mutable* 
    const { username, image_url,  } = searchResults


    // When I do this, I usaully will do each seperate deconstruction path in order as i come to them. After i deconstruct each object, i will check to make sure it is still rendering. I would commit after doing a whole component. However, it may be best for you to commit a little more often until you get the hang of this. 

    return (
    <>
        <div>
        {/* <StyledLoadingMessage>{!this.props.searchLoaded && <p>'Making a very impressive request to our AI. Calculating  */}
          <StyledLoadingMessage>{!searchLoaded && <p>'Making a very impressive request to our AI. Calculating live scores now...'</p>}</StyledLoadingMessage>
    
          <DataCardWrapper>
           
          {/* {this.props.searchLoaded &&  */}
              {searchLoaded && 
              <>
              {/* <HeaderTitle>@{this.props.searchResults.username}</HeaderTitle> */}
              <HeaderTitle>@{username}</HeaderTitle>
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
                  {/* {this.state.displayedData && <SingleUserTraitsGraph data={this.dataProviderLogic(this.state.displayedData)} /> } */}
                  {displayedData && <SingleUserTraitsGraph data={this.dataProviderLogic(displayedData)} /> }
                </div>
      
              <div>
              {/* {this.state.displayedData} */}
              {displayedData}
              {/* <TraitsLegend profilePic={this.props.searchResults.image_url} data={this.dataProviderLogic(displayedData)}/> */}
              <TraitsLegend profilePic={image_url} data={this.dataProviderLogic(displayedData)}/>
              </div>
              </>
              }
          </DataCardWrapper>
        </div>
    </>
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
