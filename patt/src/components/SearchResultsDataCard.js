
import React from "react";
import SingleUserTraitsGraph from './SingleUserTraitsGraph'
import TraitsLegend from './TraitsLegend'
import Loader from 'react-loader-spinner';
import axios from 'axios';
import {connect} from 'react-redux';
import { TwitterFollowButton} from 'react-twitter-embed'

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
    margin: 0;
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
  padding-top: 5vh; 
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
      tabs: ["Personality", "Needs", "Values"],
      score: ''
    };
  }

  componentDidMount() {
    //
    const compareUsers = [{username: this.props.twitter_handle}, {username:this.props.searchResults.username}]
    axios.post('https://pyschographic-analysis-of-text.herokuapp.com/api/users/reccomendations', compareUsers)
      .then(res => 
        this.setState({
          score: res.data.score
        })
      )
      .catch(err => 
        console.log(err)
      )
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
    const { displayedData } = this.state
    
    return (
      <>
          {this.state.score && <div>{parseInt(this.state.score*100)}% Personality Match!</div>}
          <div style={{margin: '1%'}}>
            <TwitterFollowButton
            screenName={this.props.searchResults.username}
             />
          </div>
          {this.props.searchResults.username && <DataCardWrapper>
              {this.props.searchResults.username && 
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
                    
                    {this.props.searchResults.username && 
                      <SingleUserTraitsGraph
                        data={this.dataProviderLogic(displayedData)}
                      />
                    }
                  </div>
  
                  <div style={{    margin: '15vh 1vw', textAlign: 'center', width: '40%'}}>
                  <HeaderTitle>@{this.props.searchResults.username}</HeaderTitle>
                    <TraitsLegend
                      profilePic={this.props.searchResults.image_url}
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

const mapStateToProps = state => {
  return {
  error: state.error,
  twitter_handle: state.twitter_handle,
}}

export default connect(mapStateToProps, null)(SearchResultsDataCard);