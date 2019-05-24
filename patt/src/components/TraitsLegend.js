import React from 'react';
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
    //conditionally render the color to match the score for each progress (red, yellow, green)
    const percent = objOfArr.map((trait, i) => {
        return <Progress
                    key={i}
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
                    </ProfileLevels>
                </ProfileCard>
        </SearchWrapper>
    );
}
