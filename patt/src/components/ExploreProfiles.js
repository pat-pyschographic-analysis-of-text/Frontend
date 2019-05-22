import React, { Component } from 'react';
import styled from 'styled-components';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import AustenPic from '../assets/austenPic.jpeg';
import { connect } from 'react-redux'
import { testing } from '../actions'

const SearchWrapper = styled.div`
    background-color: white; 
    max-width: 500px; 
    width: 100%; 
    margin: 30px auto; 
    display: flex; 
    flex-direction: column; 
    text-align: center; 
    align-items: center; 
    font-family: 'Montserrat', sans-serif;
`; 

const ProfileCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
`;

const ProfileImage = styled.img`
    width: 60px;
    border-radius: 50%;
    margin-right: 20px; 
`;

const ProfileLevels = styled.div`
    width: 300px; 
`;

class ExploreProfiles extends Component {
    componentDidMount() {
        this.props.testing('austen')
    }

    render() {
        console.log(this.props.testResults)
        return (
            <SearchWrapper>
                {this.props.testResults.personality ? (
                    <ProfileCard>
                        <ProfileImage src={AustenPic}/>
                        <ProfileLevels>
                            <Progress
                                percent={this.props.testResults.personality.conscientiousness*100}
                                //percent={75}
                                theme={{
                                    active: {
                                    symbol: '🤔',
                                    color: '#1EC56D'
                                    }
                                }}
                            />
                            <Progress
                                percent={this.props.testResults.needs.challenge*100}
                                //percent={56}
                                theme={{
                                    active: {
                                    symbol: '💪',
                                    color: '#FFD602'
                                    }
                                }}
                            />
                            <Progress
                                percent={this.props.testResults.needs.love*100}
                                //percent={80}
                                theme={{
                                    active: {
                                    symbol: '🖖',
                                    color: '#CE46DD'
                                    }
                                }}
                            />
                        </ProfileLevels>
                    </ProfileCard>
                ) : (
                    null
                )} 
            </SearchWrapper>
        );
    }
}

const mapStateToProps = state => ({
    error: state.error,
    testing: state.testing,
    testResults: state.testResults
})

export default connect(mapStateToProps, { testing })(ExploreProfiles);