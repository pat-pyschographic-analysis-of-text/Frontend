import React from "react";
import styled from 'styled-components'; 
import MobileLogo from '../assets/MobileLogo.png'; 
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux'
import { testing } from '../actions'
import SingleUserTraitsGraph from './SingleUserTraitsGraph'

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
    data: [],
    displayedData: ''
  }
  componentDidMount() {
    this.props.testing("austen")
    setTimeout(() => {
      this.setState({
        data: this.props.testResults.personality,
        displayedData: 'Personality'
      })
    }, 500)
  }
  clickHandler = e => {
    e.preventDefault()
    this.setState({
      data: this.dataProviderLogic(e.target.id),
      displayedData: e.target.id
    })
  }
  dataProviderLogic = dataName => {
    if (dataName === 'Personality') {
      return this.props.testResults.personality
    } else if (dataName === 'Needs') {
      return this.props.testResults.needs
    } else if (dataName === 'Values') {
      return this.props.testResults.values
    }
  }
  percentileProviderLogic = integer => {
    const percentile = (integer * 100).toFixed(2)
    return percentile
  }
  legendTitleCapitalizer = legendKey => {
    const legendTitle = (legendKey.charAt(0).toUpperCase() + legendKey.slice(1).replace(/[^a-zA-Z ]/g, " "))
    return legendTitle
  }
  render() {
    const obj = this.state.data
    const objOfArr = Object.keys(obj).map(key => {
        return {
            key: this.legendTitleCapitalizer(key),
            value: obj[key]
        }
    })
    const profileData = this.props.testResults
    const legend = objOfArr.map((data, i) => {
      return <p key={i}>{this.legendTitleCapitalizer(data.key)}: %{this.percentileProviderLogic(data.value)}</p>
    })
    return (
      <DataCardWrapper>
        <MobileLogoStyled src={MobileLogo} alt="TweetMate logo" />
        <HeaderTitle>@{profileData.username}</HeaderTitle>
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
            <SingleUserTraitsGraph props={objOfArr}/>
          </div>
        <div>
        {this.state.displayedData}
          <p>{legend}</p>
        </div>
        <Link to="/search">
          <SearchAgainButton>Search again</SearchAgainButton>
        </Link>

      </DataCardWrapper>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  testing: state.testing,
  testResults: state.testResults
})

export default connect(
  mapStateToProps,
  { testing }
)(DataCard);
