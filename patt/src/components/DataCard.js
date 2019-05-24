import React, { Component } from "react";
import { connect } from 'react-redux'
import { searching } from '../actions'
import SingleUserTraitsGraph from './SingleUserTraitsGraph'
import TraitsLegend from './TraitsLegend'

import styled from 'styled-components'; 

// 5. Importing new components to be created 
import Tabs from './Tabs'; 

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
  //3. Making sure props can pass down
  constructor(props) {
    super(props);
    this.state = {
      displayedData: "Personality",
      // 1. Setting up a Displayed tab on state
      selectedTab: "Personality",
      // 2. Setting up all the tab Data inline
      tabs: ["Personality", "Needs", "Values"]
    };
  }
  componentDidMount() {
    this.props.searching(`${this.props.username}`);
  }

  clickHandler = tab => {
    
     this.setState({
       displayedData: tab, 
       // Setting tab state to be whatever tab is clicked on 
       selectedTab: tab
     });
  };

  dataProviderLogic = dataName => {
    if (dataName === "Personality") {
      return this.props.searchResults.personality;
    } else if (dataName === "Needs") {
      return this.props.searchResults.needs;
    } else if (dataName === "Values") {
      return this.props.searchResults.values;
    }
  };

  render() {
    // SKIP THIS AT FIRST
    // cannot declare a deconstructed object here because searchResults comes off of this.props and the compiler goes top to bottom
    // const { username, image_url,  } = searchResults

    //We are going to deconstruct antyhing that comes off this.props or this.state into an object literal so we can make our JSX more readable, assigning as a const *non-mutable*
    const { searchLoaded, searchResults } = this.props;

    const { displayedData } = this.state;

    //Since we deconstructed searchResults above, we can extend of it like so...
    const { username, image_url } = searchResults;

    return (
      <>
        <div>
          {/* <StyledLoadingMessage>{!this.props.searchLoaded && <p>'Making a very impressive request to our AI. Calculating  */}
          <StyledLoadingMessage>
            {!searchLoaded && (
              <p>
                'Making a very impressive request to our AI. Calculating live
                scores now...'
              </p>
            )}
          </StyledLoadingMessage>

          <DataCardWrapper>
            {/* {this.props.searchLoaded &&  */}
            {searchLoaded && (
              <>
                {/* <HeaderTitle>@{this.props.searchResults.username}</HeaderTitle> */}
                <HeaderTitle>@{username}</HeaderTitle>
                <TabNavWrapper>

                  <Tabs tabs={this.state.tabs} selectedTab={this.state.selectedTab} selectedTabHandler={this.clickHandler}/> 

                  {/* <TabNav id="Personality" onClick={this.clickHandler} >
                    Personality
                  </TabNav>
                  <TabNav 
                  id="Values" 
                  onClick={this.clickHandler} >
                    Values
                  </TabNav>
                  <TabNav id="Needs" onClick={this.clickHandler}>
                    Needs
                  </TabNav> */}
                </TabNavWrapper>

                <div>
                  {/* {this.state.displayedData && <SingleUserTraitsGraph data={this.dataProviderLogic(this.state.displayedData)} /> } */}
                  {displayedData && (
                    <SingleUserTraitsGraph
                      data={this.dataProviderLogic(displayedData)}
                    />
                  )}
                </div>

                <div>
                  {/* {this.state.displayedData} */}
                  {displayedData}

                  {/* <TraitsLegend profilePic={this.props.searchResults.image_url} data={this.dataProviderLogic(displayedData)}/> */}
                  <TraitsLegend
                    profilePic={image_url}
                    data={this.dataProviderLogic(displayedData)}
                  />
                </div>
              </>
            )}
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
