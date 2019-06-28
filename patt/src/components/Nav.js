// React and Redux components we need 
import React from 'react';
import styled from 'styled-components'

// Our own somponents 
import  SearchForm  from './SearchForm';
import NavButtonWrapper from './NavButtonWrapper';
import MobileLogo from '../assets/MobileLogo.png';

// Styled component 
const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 15vh;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background-color:  #FBFAFA;
    z-index: 5;
`
// Styled component 
const HeaderLogo = styled.img`
height: 20vh;
width: 20vh;
`; 

// The Nav component displays our Nav 
export default function Nav() {
    return (
        <NavWrapper style={{zIndex: 100, backgroundColor:'white'}}>
        <HeaderLogo src={MobileLogo} alt="TweetMate logo" />
        <SearchForm />
        <NavButtonWrapper />
        </NavWrapper>
    )
}