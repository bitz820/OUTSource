import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import { createSignUp } from "../Features/usersSlice"

// import {useNavigate} from "react-router-dom"
// import toast from "react-hot-toast"

function Signup() {
    const dispatch = useDispatch()

    const [signUpData, setSignUpData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        age: null,
        gender: "",
        sexuality: "",
        reason_for_signup: "",
        referred: ""
    })

    const { first_name, last_name, email, password, age, gender, sexuality, reason_for_signup, referred } = signUpData

    const handleChange = (e) => {
        const key = e.target.name

        setSignUpData({
            ...signUpData,
            [key]: e.target.value
        })
    }

    const signUserUp = (e) => {
        e.preventDefault()
        dispatch(createSignUp(signUpData))
    }

    console.log(signUpData)

    return (
        <div>
            Signup
            <form onSubmit={signUserUp}>
                <input
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    value={first_name}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    value={last_name}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />

                <label>Age</label>
                <input
                    type="number"
                    min="18"
                    placeholder="Age"
                    name="age"
                    value={age}
                    onChange={handleChange}
                />

                <label>Gender
                    <select name="gender" onChange={handleChange}>
                        <option value="">--Please choose an option--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Transgender">Transgender</option>
                        <option value="Nonbinary">Nonbinary</option>
                        <option value="Other">Other</option>
                    </select>
                </label>

                <label>Sexuality
                    <select name="sexuality" onChange={handleChange}>
                        <option value="">--Please choose an option--</option>
                        <option value="Gay">Gay</option>
                        <option value="Lesbian">Lesbian</option>
                        <option value="Bisexual">Bisexual</option>
                        <option value="Asexual">Asexual</option>
                        <option value="Other">Other</option>
                    </select>
                </label>

                <label>Reason for Signing Up
                    <select name="reason_for_signup" onChange={handleChange}>
                        <option value="">--Please choose an option--</option>
                        <option value="STI Testing">STI Testing</option>
                        <option value="PrEP">PrEP</option>
                        <option value="HIV Testing">HIV Testing</option>
                        <option value="Counseling">Counseling</option>
                        <option value="Other">Other</option>
                    </select>
                </label>

                <label>How'd You Hear About Us?
                    <select name="referred" onChange={handleChange}>
                        <option value="">--Please choose an option--</option>
                        <option value="Internet">Internet</option>
                        <option value="Friend">Friend</option>
                        <option value="Partner">Partner</option>
                        <option value="Healthcare Provider">Healthcare Provider</option>
                        <option value="Other">Other</option>
                    </select>
                </label>

                <input type="submit" />
            </form>

            or go back to <Link to="/login"> Log In</Link>

        </div>
    )
}

export default Signup