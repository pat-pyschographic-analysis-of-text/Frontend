import React from 'react'
import  SearchForm  from './SearchForm';
import NavButtonWrapper from './NavButtonWrapper';
import styled from 'styled-components'
import MobileLogo from '../assets/MobileLogo.png';

const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 15vh;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background-color:  #FBFAFA,
    z-index: 5;
`

const HeaderLogo = styled.img`
height: 20vh;
width: 20vh;
`; 

export default function Nav() {
    return (
        <NavWrapper style={{zIndex: 100, backgroundColor:'white'}}>
        <HeaderLogo src={MobileLogo} alt="TweetMate logo" />
        <SearchForm />
        <NavButtonWrapper />
        </NavWrapper>
    )
}