import React from 'react'
import  SearchForm  from './SearchForm';
import NavButtonWrapper from './NavButtonWrapper';
import styled from 'styled-components'

const NavWrapper = styled.div`
    width: 100%;
    height: 15vh;
    border-bottom: 2px solid grey;
`

export default function Nav() {
    return (
        <NavWrapper>
        <SearchForm />
        <NavButtonWrapper />
        </NavWrapper>
    )
}