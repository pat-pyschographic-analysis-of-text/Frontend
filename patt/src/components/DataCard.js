// React and Redux library elements we need
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from "react-loader-spinner";

// Actions
import { searching, timelineDataFetch } from "../actions";

// Components we built
import SearchResultsDataCard from "./SearchResultsDataCard";
import SingleUserTraitsGraph from "./SingleUserTraitsGraph";
import TraitsLegend from "./TraitsLegend";
import RawScoreLegend from "./RawScoreLegend";
import Tabs from "./Tabs";
// Other assets
import timeline1 from "../assets/timeline1.png";
import timeline2 from "../assets/timeline2.png";

// Styling starts
const DataCardWrapper = styled.div`
  background-color: white;
  max-width: 100vw;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  margin: 5vh 0;
`;

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
  font-family: "Montserrat", sans-serif;
  max-width: 50vw;
  h1 {
  }
`;

const StatsButton = styled.button`
  border-radius: 50px;
  height: 5vh;
  background: #12b1fc;
  color: white;
`;
// Styling ends

class DataCard extends React.Component {
  // DataCard needs to be a class Component to hold state
  constructor(props) {
    super(props);
    this.state = {
      displayedData: "Personality",
      // Setting up a Displayed tab on state
      selectedTab: "Personality",
      // Storing all the tab options as an array
      tabs: ["Personality", "Needs", "Values"],

      statsFlag: false,

      timelinePhoto: timeline1,
      timelineFlag: false
    };
  }

  // Finds the right Twitter handle and mounts that data to the store
  componentDidMount() {
    this.props.searching(`${this.props.twitter_handle}`);
  }

  // Event handler to make sure we disply theright user's data
  clickHandler = e => {
    e.preventDefault();
    this.setState({
      displayedData: e.target.id
    });
  };

  // Handles the change whenever a user clicks on a new tab
  clickHandler = tab => {
    this.setState({
      displayedData: tab,
      // Setting tab state to be whatever tab is clicked on
      selectedTab: tab
    });
  };

  // Function to map the selected data to the right tab
  dataProviderLogic = dataName => {
    if (dataName === "Personality") {
      return this.props.searchResults.personality;
    } else if (dataName === "Needs") {
      return this.props.searchResults.needs;
    } else if (dataName === "Values") {
      return this.props.searchResults.values;
    }
  };

  // When user clicks, shows or hides data, depending on state
  showData = e => {
    e.preventDefault();
    this.setState({
      statsFlag: !this.state.statsFlag
    });
  };

  // When user clicks, shows or hides timeline, depending on state
  showTimeline = e => {
    e.preventDefault();
    this.setState({
      timelineFlag: !this.state.timelineFlag
    });
  };

  // Performs our action
  timelineDataFetch = e => {
    e.preventDefault();
    this.props.timelineDataFetch(this.props.twitter_handle);
  };

  // Rotates photos through, depending on user clicks
  photoSwitcher = e => {
    e.preventDefault();
    this.setState({
      timelinePhoto:
        this.state.timelinePhoto === timeline1 ? timeline2 : timeline1
    });
  };

  render() {
    const { searchLoaded, searchResults, twitter_handle } = this.props;
    const { displayedData } = this.state;
    const { image_url, username } = searchResults;
    return (
      <>
        <StyledLoadingMessage>
          {!searchLoaded && (
            <>
              Welcome, <h1>{this.props.username}</h1>.
              <br />
              The twitter handle you entered when signing up is displayed here.
              <br />
              {twitter_handle ? (
                <>
                  You can change which twitter handle you see first at anytime
                  in the settings menu. <br />
                  <br />
                  We are now making a very impressive request to our AI.
                  <br />
                  Calculating live scores now
                </>
              ) : (
                <>You have do not have a valid twitter name on your profile</>
              )}
            </>
          )}
          {!searchLoaded && (
            <div style={{ margin: "0 auto" }}>
              <Loader type="Plane" height={150} width={150} />
            </div>
          )}
        </StyledLoadingMessage>

        {searchLoaded && (
          <DataCardWrapper>
            {searchLoaded && (
              <>
                <Tabs
                  tabs={this.state.tabs}
                  selectedTab={this.state.selectedTab}
                  selectedTabHandler={this.clickHandler}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    margin: "0 10vw",
                    width: "100%",
                    justifyContent: "flex-end",
                    height: "auto"
                  }}
                >
                  <div
                    style={{
                      width: "30vw",
                      margin: "0 auto"
                    }}
                  >
                    {displayedData && (
                      <SingleUserTraitsGraph
                        data={this.dataProviderLogic(displayedData)}
                      />
                    )}
                  </div>
                  <div style={{ minWidth: "15vw" }}>
                    <div style={{ marginTop: "10vh" }}>
                      <StatsButton onClick={this.showData}>
                        Click to see values
                      </StatsButton>
                    </div>
                    {this.state.statsFlag && (
                      <RawScoreLegend
                        data={this.dataProviderLogic(displayedData)}
                      />
                    )}
                  </div>

                  <div
                    style={{
                      margin: "15vh 1vw",
                      textAlign: "center",
                      width: "40%"
                    }}
                  >
                    <HeaderTitle>@{username}</HeaderTitle>
                    <TraitsLegend
                      profilePic={image_url}
                      data={this.dataProviderLogic(displayedData)}
                    />
                  </div>
                </div>
              </>
            )}
          </DataCardWrapper>
        )}
        {this.props.compareResults.length > 0 &&
          this.props.compareResults.map(user => (
            <DataCardWrapper>
              <SearchResultsDataCard searchResults={user} />
            </DataCardWrapper>
          ))}

        <div>
          {this.state.timelineFlag ? (
            <StatsButton onClick={this.photoSwitcher}>
              Click to change the timeline
            </StatsButton>
          ) : (
            <StatsButton onClick={this.showTimeline}>
              Click to change the timeline
            </StatsButton>
          )}
          <div style={{ height: "25vh", width: "100%" }} />
          {this.state.timelineFlag && (
            <img
              style={{
                width: "40%",
                maxHeight: "30vh",
                height: "auto",
                margin: "0 auto"
              }}
              src={this.state.timelinePhoto}
            />
          )}
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
    compareResults: state.compareResults,
    username: state.username,
    searchLoaded: state.searchLoaded,
    twitter_handle: state.twitter_handle,
    timelineData: state.timelineData
  };
};

export default connect(
  mapStateToProps,
  { searching, timelineDataFetch }
)(DataCard);
