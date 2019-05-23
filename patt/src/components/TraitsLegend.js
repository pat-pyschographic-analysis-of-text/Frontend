import React, { Component } from 'react';
import styled from 'styled-components';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

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

export default function ExploreProfiles(props) {
    console.log(props)
    const obj = props.data
    const objOfArr = Object.keys(obj).map(key => {
        return {
            key: (key.charAt(0).toUpperCase() + key.slice(1).replace(/[^a-zA-Z ]/g, " ")),
            value: obj[key]
        }
    })
    const percent = objOfArr.map((trait, i) => {
        return <Progress
                    percent={trait.value*100}
                    theme={{
                                active: {
                                symbol: `${trait.key}`,
                                color: '#1EC56D'
                                }
                            }}
                    />
    })
    console.log(objOfArr)
    return (
        <SearchWrapper>
                <ProfileCard>
                    <ProfileImage src={props.profilePic}/>
                    <ProfileLevels>
                        {percent}
                        {/* <Progress
                            percent={props.testResults.personality.conscientiousness*100}
                            //percent={75}
                            theme={{
                                active: {
                                symbol: 'conscientiousness',
                                color: '#1EC56D'
                                }
                            }}
                        />
                        <Progress
                            percent={props.testResults.needs.challenge*100}
                            //percent={56}
                            theme={{
                                active: {
                                symbol: 'challenge',
                                color: '#FFD602'
                                }
                            }}
                        />
                        <Progress
                            percent={props.testResults.needs.love*100}
                            //percent={80}
                            theme={{
                                active: {
                                symbol: 'love',
                                color: '#CE46DD'
                                }
                            }}
                        /> */}
                    </ProfileLevels>
                </ProfileCard>
        </SearchWrapper>
    );
}
