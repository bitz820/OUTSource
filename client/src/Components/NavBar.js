import React from 'react'
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { logoutUser } from '../Features/usersSlice'

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
    const dispatch = useDispatch()

    const user = useSelector(state => state.user)


    const handleLogout = () => {
        dispatch(logoutUser(user))
    }

    return (
        <NavStyle>
            <StyledLink exact to="/" >
                Home
            </StyledLink>
            <StyledLink exact to="/clinics" >
                Browse Care
            </StyledLink>
            <StyledLink exact to="/favorites" >
                {user.first_name}'s Saved Clinics
            </StyledLink>
            <StyledLink exact to="/profile" >
                Edit Profile
            </StyledLink>
            {(user.id) ?
                <StyledLink exact to="/" onClick={handleLogout}>Log Out</StyledLink>
                :
                <StyledLink exact to="/login">Login</StyledLink>
            }
        </NavStyle>
    )
}

export default NavBar