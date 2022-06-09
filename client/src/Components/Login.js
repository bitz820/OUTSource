import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { fetchUser } from '../Features/usersSlice';



function Login() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser());
    }, [])

    const currentUser = useSelector(state => console.log(state))


    const [user, setUser] = useState("")
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = loginData

    const loginUser = (e) => {
        e.preventDefault()

        const configObj = {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(loginData)
        }

        fetch("/login", configObj)
            .then(r => {
                if (r.ok) {
                    r.json().then(userData => {
                        console.log(userData)
                        setUser(userData)
                    })
                } else {
                    r.json().then(err => {
                        console.log(err)
                        // SET ERROR HERE
                    })
                }
            })
    }

    const handleChange = (e) => {
        const key = e.target.name

        setLoginData({
            ...loginData,
            [key]: e.target.value
        })
    }

    console.log(user)

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