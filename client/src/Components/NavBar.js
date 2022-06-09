import React from 'react'
import { NavLink } from "react-router-dom"
import {useSelector} from "react-redux"
import styled from "styled-components"

const NavStyle = styled.div`
    display: flex;
    /* width: 35vh; */
    padding: 25px;
    text-align: center;
    font-size: clamp(1.5rem, 3vw + 1rem, .5rem);
    align-items: center;
    margin-bottom: 30px;
    justify-content: space-around;
`

const StyledLink = styled(NavLink)`
    width: 100%;
    padding: 12px;
    margin:  6px 6px;
    background: #357266;
    border: #312509 6px solid;
    text-decoration: none;
    color: white;
`


function NavBar() {

    const currentUser = useSelector(state => (state.user.user.name))
    console.log(currentUser)

    return (
        <NavStyle>
            <StyledLink exact to="/" >
                Home
            </StyledLink>
            <StyledLink exact to="/clinics" >
                Browse Care
            </StyledLink>
            <StyledLink exact to="/favorites" >
                {currentUser}'s Saved Clinics
            </StyledLink>
            <StyledLink exact to="/profile" >
                Edit Profile
            </StyledLink>
            <StyledLink exact to="/login" >
                Login
            </StyledLink>
        </NavStyle>
    )
}

export default NavBar