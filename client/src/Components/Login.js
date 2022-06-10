import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"

import { fetchLogin } from '../Features/usersSlice';

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const user = useSelector(state => state.user)
    const { email, password } = loginData
    
    const loginUser = (e) => {
        e.preventDefault()
        dispatch(fetchLogin(loginData));
        if(user.id){
            navigate("/")
        }else{
            navigate("/login")
        }
        setLoginData({
            email: '',
            password: ''
        })
        // console.log(user)
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
                    <label>
                        Email:
                        <input
                            onChange={handleChange}
                            value={email}
                            name="email"
                            type="email"
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            onChange={handleChange}
                            value={password}
                            name="password"
                            type="password"
                        />
                    </label>
                    <input type="submit" />
                    {/* {error ? renderError : null} */}
                </form>
            </div>
            <div>
                or you can <Link to="/signup"> Sign Up</Link>
            </div>
        </>
    )
}

export default Login