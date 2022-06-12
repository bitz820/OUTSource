import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { GiRainbowStar } from "react-icons/gi"
import { FaBars, FaTimes } from "react-icons/fa"
import "./pages/NavBar.css"
import styled from "styled-components"
import { Button } from "./pages/Button"
import { logoutUser } from '../Features/usersSlice'



function NavBar() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const closeMobileMenu = () => setClick(false)

    const doBoth = () => {
        closeMobileMenu()
        handleLogout()
    }


    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else setButton(true)
    }
    window.addEventListener("resize", showButton)

    const handleLogout = () => {
        dispatch(logoutUser(user))
    }


    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <NavLink exact to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <GiRainbowStar className="navbar-icon" />
                        OUTSouce
                    </NavLink>
                    <div className="menu-icon" onClick={() => setClick(!click)}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <NavLink onClick={closeMobileMenu} className="nav-links" exact to="/clinics" >
                                Browse Care
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink onClick={closeMobileMenu} className="nav-links" exact to="/favorites" >
                                {user.id ? `${user.first_name}'s Saved Clinics` : "Saved Clinics"}
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink onClick={closeMobileMenu} className="nav-links" exact to="/profile" >
                                Profile Details
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            {(user.id) ?
                                <NavLink className="nav-links" exact to="/" onClick={doBoth}>Log Out</NavLink>
                                :
                                <NavLink className="nav-links" onClick={closeMobileMenu} exact to="/login">Login</NavLink>
                            }
                        </li>
                        {user.id ? null :
                            <li className='nav-btn'>
                                {button ? (
                                    <NavLink exact to="/signup" onClick={closeMobileMenu} className="btn-link">
                                        <Button buttonStyle="btn--outline">Sign Up!</Button>
                                    </NavLink>
                                ) :
                                    <NavLink exact to="/signup" onClick={closeMobileMenu} className="btn-link">
                                        <Button buttonStyle="btn--outline" buttonSize="mobile">Sign Up!</Button>
                                    </NavLink>
                                }
                            </li>
                        }


                    </ul>
                </div>
            </div>
        </>



    )
}

export default NavBar

// const NavStyle = styled.div`
//     display: flex;
//     /* width: 35vh; */
//     padding: 25px;
//     text-align: center;
//     font-size: clamp(1.5rem, 3vw + 1rem, .5rem);
//     align-items: center;
//     margin-bottom: 30px;
//     justify-content: space-around;
// `

// const StyledLink = styled(NavLink)`
//     width: 100%;
//     padding: 12px;
//     margin:  6px 6px;
//     background: #357266;
//     border: #312509 6px solid;
//     text-decoration: none;
//     color: white;
// `

// function NavBar() {
//     const dispatch = useDispatch()

//     const user = useSelector(state => state.user)


//     const handleLogout = () => {
//         dispatch(logoutUser(user))
//     }

//     return (
//         <NavStyle>
//             <StyledLink exact to="/" >
//                 Home
//             </StyledLink>
//             <StyledLink exact to="/clinics" >
//                 Browse Care
//             </StyledLink>
//             <StyledLink exact to="/favorites" >
//                 {user.first_name}'s Saved Clinics
//             </StyledLink>
//             <StyledLink exact to="/profile" >
//                 Profile Details
//             </StyledLink>
//             {(user.id) ?
//                 <StyledLink exact to="/" onClick={handleLogout}>Log Out</StyledLink>
//                 :
//                 <StyledLink exact to="/login">Login</StyledLink>
//             }
//         </NavStyle>
//     )
// }

// export default NavBar