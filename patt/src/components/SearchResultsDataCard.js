import React from "react";
import styled from 'styled-components'; 
import { connect } from 'react-redux'
import { searching } from '../actions'
import SingleUserTraitsGraph from './SingleUserTraitsGraph'
import TraitsLegend from './TraitsLegend'
import Loader from 'react-loader-spinner';

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
  max-width: 50vw;
  h1 {

  }
`;     


class SearchResultsDataCard extends React.Component {
  state = {
    displayedData: 'Personality'
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
    const { searchLoaded, searchResults, twitter_handle, username } = this.props
    const { displayedData } = this.state
    const {  image_url  } = searchResults

    return (
    <>
        <div>
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
                  {displayedData && <SingleUserTraitsGraph data={this.dataProviderLogic(displayedData)} /> }
                </div>
      
              <div>
              {displayedData}
              <TraitsLegend profilePic={image_url} data={this.dataProviderLogic(displayedData)}/>
              </div>
              </>
              }
          </DataCardWrapper>}
        </div>
    </>
    );
  }
}



const mapStateToProps = state => {
  return {
      
}}

export default connect(
  mapStateToProps,
  { searching }
)(SearchResultsDataCard);
