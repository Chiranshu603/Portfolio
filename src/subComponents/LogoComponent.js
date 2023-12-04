import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'




const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;
font-weight: 100;
font-size: 5 rem;
position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`
const Name = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;
font-weight: 100;
font-size: 3 rem;
position: fixed;
left: 4rem;
top: 4.25rem;
z-index:3;
`


const LogoComponent = (props) => {
    return (
      <NavLink to="/" >
        <Logo color={props.theme}>
          Chiranshu
        </Logo>
        <Name color={props.theme} >
          Goel
          </Name>
      </NavLink>
    )
}

export default LogoComponent
