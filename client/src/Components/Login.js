import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { fetchLogin } from '../Features/usersSlice';

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = loginData

    const loginUser = (e) => {
        e.preventDefault()
        dispatch(fetchLogin(loginData, navigate, toast));
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
        <div className='login__container'>
            <h1>Login</h1>
            <div className="form__wrapper">
                <form className='form' onSubmit={loginUser}>
                    <label>
                        Email:
                        <input className='styled__input'
                            onChange={handleChange}
                            value={email}
                            name="email"
                            type="email"
                        />
                    </label>
                    <label>
                        Password:
                        <input className='styled__input'
                            onChange={handleChange}
                            value={password}
                            name="password"
                            type="password"
                        />
                    </label>
                    <div className="swipe__btn">
                        <button
                            className='btn swipe__btn'
                            type="submit">
                            <div id="dub-arrow">
                                <img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" />
                            </div>
                            Login</button>
                    </div>
                </form >
            </div>
            <div className='link__other'>
                <button className='btn swipe__btn' onClick={() => navigate('/signup')}>
                    <div id="dub-arrow">
                        <img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" />
                    </div>
                    or Sign Up!</button>
            </div>
        </div>
    )
}

export default Login
