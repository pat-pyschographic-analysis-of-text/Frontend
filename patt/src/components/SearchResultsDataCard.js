
import React from "react";
import { connect } from 'react-redux'
import { searching } from '../actions'
import SingleUserTraitsGraph from './SingleUserTraitsGraph'
import TraitsLegend from './TraitsLegend'
import Loader from 'react-loader-spinner';

import styled from 'styled-components'; 

// 5. Importing new components to be created 
import Tabs from './Tabs'; 

const DataCardWrapper = styled.div`
    background-color: white; 
    max-width: 100vw; 
    width: 100%; 
    margin: 0 auto; 
    display: flex; 
    flex-direction: column; 
    text-align: center; 
    align-items: center; 
    font-family: 'Montserrat', sans-serif;
    margin: 5vh 0;
`;

// For refactoring: create a custom React component that takes prop, and those props will be string of title
const HeaderTitle = styled.h2`
    color: #0082c9; 
    display: flex;
    margin-left: 10vw;
`; 

const StyledLoadingMessage = styled.div`
  z-index: 5;
  margin: 0 auto;
  text-align: center;
  padding-top: 15vh; 
  font-family: 'Montserrat', sans-serif;
  max-width: 50vw;
  h1 {

  }
`;     

class SearchResultsDataCard extends React.Component {
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
    this.props.searching(`${this.props.twitter_handle}`)
  }
  clickHandler = e => {
    e.preventDefault()
    this.setState({
      displayedData: e.target.id,
    })
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
    const { inputSearchLoaded, searchInputResults } = this.props
    const { twitter_handle, username, displayedData, image_url } = searchInputResults
    return (
      <>
          <StyledLoadingMessage>{!inputSearchLoaded && <>Welcome, <h1>{username}</h1>. <br/>
            The twitter handle you entered when signing up is displayed here. <br/>
            {(twitter_handle) ? <>You can change which twitter handle you see first at anytime in the settings menu. <br/><br/>
            We are now making a very impressive request to our AI.<br/> 
            Calculating live scores now</> : <>You have do not have a valid twitter name on your profile</>}</>}
            {!inputSearchLoaded && <div style={{margin: '0 auto'}}><Loader type="Plane" height={150} width={150} /></div>}
            </StyledLoadingMessage>

          {twitter_handle && <DataCardWrapper>
              {inputSearchLoaded && 
              <>
                  <Tabs tabs={this.state.tabs} selectedTab={this.state.selectedTab} selectedTabHandler={this.clickHandler}/> 
                <div style={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  margin: '0 10vw',
                  width: '100%',
                  justifyContent: 'flex-end',
                  height: 'auto'
                }}>
                  <div style={{
                    width: '30vw',
                    margin: '0 auto'
                  }}>
                    
                    {displayedData && 
                      <SingleUserTraitsGraph
                        data={this.dataProviderLogic(displayedData)}
                      />
                    }
                  </div>
  
                  <div style={{    margin: '15vh 1vw', textAlign: 'center', width: '40%'}}>
                  <HeaderTitle>@{twitter_handle}</HeaderTitle>
                    <TraitsLegend
                      profilePic={image_url}
                      data={this.dataProviderLogic(displayedData)}
                    />
                  </div>
                </div>
              </>
            }
          </DataCardWrapper>}
        
      </>
    );
  }
}

export default SearchResultsDataCard