import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { GiRainbowStar } from "react-icons/gi"
import { FaBars, FaTimes } from "react-icons/fa"
import { toast } from "react-toastify"

import { logoutUser } from '../Features/usersSlice'



function NavBar() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [click, setClick] = useState(false)

    const handleLogout = () => dispatch(logoutUser(toast))

    const closeMobileMenu = () => setClick(false)
    const doBoth = () => {
        closeMobileMenu()
        handleLogout()
    }

    return (
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
                        <li className='nav-item'>
                            <NavLink exact to="/signup" onClick={closeMobileMenu} className="nav-links">
                                Sign Up!
                            </NavLink>
                        </li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavBar
