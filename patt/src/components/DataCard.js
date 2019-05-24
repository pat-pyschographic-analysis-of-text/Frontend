
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

const StyledLoadingMessage = styled.div`
  z-index: 5;
  margin: 0 auto;
  text-align: center;
  padding-top: 10vh; 
  font-family: 'Montserrat', sans-serif;
  max-width: 50vw;
  h1 {

  }
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
    // SKIP THIS AT FIRST
    // cannot declare a deconstructed object here because searchResults comes off of this.props and the compiler goes top to bottom
    // const { username, image_url,  } = searchResults

    //We are going to deconstruct antyhing that comes off this.props or this.state into an object literal so we can make our JSX more readable, assigning as a const *non-mutable*
      // START READING HERE
    //anthing that comes off of this.props, we are going to deconstruct into an object literal so we can make our JSX more readable, assign as a const *non-mutable* 
    const { searchLoaded, searchResults, twitter_handle, username } = this.props


 //anthing that comes off of this.state, we are going to deconstruct into an object literal so we can make our JSX more readable, assign as a const *non-mutable* 
    const { displayedData } = this.state


 //anthing that comes off of searchResults(can be thought of this.props.searchResults, but since we deconstructed it above, we can extend of it like so...however if this was defined above it would cause an error, see example), we are going to deconstruct into an object literal so we can make our JSX more readable, assign as a const *non-mutable* 
    const {  image_url  } = searchResults


    // When I do this, I usaully will do each seperate deconstruction path in order as i come to them. After i deconstruct each object, i will check to make sure it is still rendering. I would commit after doing a whole component. However, it may be best for you to commit a little more often until you get the hang of this. 
    return (
      <>
        
        
          <StyledLoadingMessage>{!searchLoaded && <p>Welcome, <h1>{username}</h1>. <br/>
            The twitter handle you entered when signing up is displayed here. <br/>
            {(twitter_handle) ? <>You can change which twitter handle you see first at anytime in the settings menu. <br/><br/>
            We are now making a very impressive request to our AI.<br/> 
            Calculating live scores now</> : <>You have do not have a valid twitter name on your profile</>}</p>}</StyledLoadingMessage>

    
          {twitter_handle && <DataCardWrapper>

          {!searchLoaded && <Loader type="Plane" height={150} width={150} />}
         
              {searchLoaded && 
              <>
              
              <HeaderTitle>@{twitter_handle}</HeaderTitle>
                           

                  <Tabs tabs={this.state.tabs} selectedTab={this.state.selectedTab} selectedTabHandler={this.clickHandler}/> 

                                

                <div>
                  
                  {displayedData && 
                    <SingleUserTraitsGraph
                      data={this.dataProviderLogic(displayedData)}
                    />
                  }
                </div>

                <div>
                  
                  {displayedData}

                  
                  <TraitsLegend
                    profilePic={image_url}
                    data={this.dataProviderLogic(displayedData)}
                  />
                </div>
              </>
            }
          </DataCardWrapper>}
        
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
  twitter_handle: state.twitter_handle
}}

export default connect(
  mapStateToProps,
  { searching }
)(DataCard);
