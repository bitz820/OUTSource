import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import {  StyledForm, StyledInput} from "../Components/Styles"
import {Button} from "../Components/pages/Button"

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
        dispatch(fetchLogin(loginData, navigate, toast));
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
            <h1>Login</h1>
            <div className="form__wrapper">
                <StyledForm onSubmit={loginUser}>
                    <label>
                        Email:
                        <StyledInput
                            onChange={handleChange}
                            value={email}
                            name="email"
                            type="email"
                        />
                    </label>
                    <label>
                        Password:
                        <StyledInput
                            onChange={handleChange}
                            value={password}
                            name="password"
                            type="password"
                        />
                    </label>
                    <Button buttonStyle="btn--outline"  type="submit">Login</Button>
                </StyledForm>
            </div>
            <div>
                or you can <Link to="/signup"> Sign Up</Link>
            </div>
        </>
    )
}

export default Login
