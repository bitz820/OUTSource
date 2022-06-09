import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { fetchLogin } from '../Features/usersSlice';

function Login() {
    const dispatch = useDispatch()

    const currentUser = useSelector(state => console.log(state))

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = loginData

    const loginUser = (e) => {
        e.preventDefault()
        dispatch(fetchLogin(loginData));
        setLoginData({
            email: '',
            password: ''
        })
    }

    const handleChange = (e) => {
        const key = e.target.name

        setLoginData({
            ...loginData,
            [key]: e.target.value
        })
    }

    return (
        <>
            <div>
                <form onSubmit={loginUser}>
                    Email:
                    <input onChange={handleChange}
                        value={email}
                        name="email" type="email" />
                    Password:
                    <input onChange={handleChange}
                        value={password}
                        name="password" type="password" />
                    <input type="submit" />
                    {/* {error ? renderError : null} */}
                </form>
            </div>
            <div>
                Sign Up
            </div>
        </>
    )
}

export default Login