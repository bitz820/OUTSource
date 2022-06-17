import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import { createSignUp } from "../Features/usersSlice"

function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [signUpData, setSignUpData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        age: null,
        gender: "",
        sexuality: "",
        reason_for_signup: "",
        referred: "",
        phone: "",
        contact_name: "",
    })

    const { first_name, last_name, email, password, age, contact_name, phone } = signUpData

    const handleChange = (e) => {
        const key = e.target.name

        setSignUpData({
            ...signUpData,
            [key]: e.target.value
        })
    }

    const signUserUp = (e) => {
        e.preventDefault()
        dispatch(createSignUp(signUpData, navigate, toast))
        setSignUpData({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            age: null,
            gender: "",
            sexuality: "",
            reason_for_signup: "",
            referred: "",
            phone: "",
            contact_name: ""
        })
    }


    return (
        <div className='login__container'>
            <div className="form__wrapper">
                <form className='form' onSubmit={signUserUp}>
                    <h1>Sign Up</h1>
                    <label>First Name
                        <input className="styled__input"
                            type="text"
                            placeholder="First Name"
                            name="first_name"
                            value={first_name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Last Name
                        <input className="styled__input"
                            type="text"
                            placeholder="Last Name"
                            name="last_name"
                            value={last_name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email
                        <input className="styled__input"
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Password
                        <input className="styled__input"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Age
                        <input className="styled__input"
                            type="number"
                            placeholder="Age"
                            name="age"
                            value={age}
                            onChange={handleChange}
                        />
                    </label>
                    <label>Emergency Contact
                        <input className="styled__input" type="text"
                            name="contact_name"
                            placeholder="Contact Name"
                            value={contact_name}
                            onChange={handleChange} />
                    </label>
                    <label>Emergency Contact Number
                        <input className="styled__input" type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={handleChange} />
                    </label>

                    <fieldset className="styled__fieldset">
                        <label>Gender
                            <select className='styled__input' name="gender" onChange={handleChange}>
                                <option value="">--Please choose an option--</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Transgender">Transgender</option>
                                <option value="Nonbinary">Nonbinary</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                        <label>Sexuality
                            <select className='styled__input' name="sexuality" onChange={handleChange}>
                                <option value="">--Please choose an option--</option>
                                <option value="Gay">Gay</option>
                                <option value="Lesbian">Lesbian</option>
                                <option value="Bisexual">Bisexual</option>
                                <option value="Asexual">Asexual</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                        <label>Reason for Signing Up
                            <select className='styled__input'
                                name="reason_for_signup"
                                onChange={handleChange}>
                                <option value="" selected>--Please choose an option--</option>
                                <option value="STI Testing">STI Testing</option>
                                <option value="PrEP">PrEP</option>
                                <option value="HIV Testing">HIV Testing</option>
                                <option value="Counseling">Counseling</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                        <label>How'd You Hear About Us?
                            <select className='styled__input' name="referred" onChange={handleChange}>
                                <option value="">--Please choose an option--</option>
                                <option value="Internet">Internet</option>
                                <option value="Friend">Friend</option>
                                <option value="Partner">Partner</option>
                                <option value="Healthcare Provider">Healthcare Provider</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                    </fieldset>

                    <div className="swipe__btn" id="signup__submit">
                        <button
                            className='btn'
                            type="submit">
                            <div id="dub-arrow">
                                <img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" />
                            </div>
                            Submit</button>
                    </div>
                </form>
            </div >
            <div className='link__other'>
                <div className="swipe__btn">
                    <button className='btn' onClick={() => navigate('/login')}>
                        <div id="dub-arrow">
                            <img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" />
                        </div>
                        Return to Login</button>
                </div>

            </div>
        </div>
    )
}

export default Signup

