import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { toast } from 'react-toastify'
import { Button } from "../Components/pages/Button"
import {  StyledForm, StyledInput, StyledFieldSet} from "./Styles"
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
    <>
        <div className="form__wrapper">
            <form className='form' onSubmit={signUserUp}>
                <h1>Sign Up</h1>
                <label>First Name
                    <StyledInput
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value={first_name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Last Name
                    <StyledInput
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        value={last_name}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email
                    <StyledInput
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password
                    <StyledInput
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Age
                    <StyledInput
                        type="number"
                        placeholder="Age"
                        name="age"
                        value={age}
                        onChange={handleChange}
                    />
                    </label>
                    <label>Emergency Contact 
                        <StyledInput type="text"
                            name="contact_name"
                            placeholder="Contact Name"
                            value={contact_name}
                            onChange={handleChange} />
                    </label>
                    <label>Emergency Contact Number
                        <StyledInput type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={handleChange} />
                    </label>

                <StyledFieldSet>
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

                </StyledFieldSet>

                <Button buttonStyle="btn--outline" type="submit">Submit</Button>
            </form>
        </div >
        or go back to <Link to="/login"> Log In</Link>
    </>
    )
}

export default Signup

