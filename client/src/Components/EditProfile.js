import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { updateAccountDetails } from "../Features/usersSlice"
import { GlobalStyle, StyledFormWrapper, StyledForm, StyledInput, StyledFieldSet } from "./Styles"


function EditProfile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userDetails = useSelector(state => state.user)

    const [profile, setProfile] = useState({
        first_name: userDetails.first_name,
        last_name: userDetails.last_name,
        gender: userDetails.gender,
        sexuality: userDetails.sexuality,
        age: userDetails.age,
        email: userDetails.email,
        reason_for_signup: userDetails.reason_for_signup,
        referred: userDetails.referred,
    })

    const { first_name, last_name, gender, age, email, reason_for_signup, referred, sexuality } = userDetails

    const handleChange = (e) => {
        const name = e.target.name
        let value = e.target.value

        setProfile({
            ...profile,
            [name]: value
        })
    }

    const updateDetails = (e) => {
        e.preventDefault()
        dispatch(updateAccountDetails(profile, toast, navigate))
    }

    console.log(profile)

    return (
        <>
            <GlobalStyle />
            <StyledFormWrapper>
                <StyledForm onSubmit={updateDetails}>
                    <h1>Edit Profile</h1>
                    <label>First Name
                        <StyledInput type="text"
                            name="first_name"
                            placeholder={first_name}
                            value={profile.first_name}
                            onChange={handleChange} />
                    </label>
                    <label>Last Name
                        <StyledInput type="text"
                            name="last_name"
                            placeholder={last_name}
                            value={profile.last_name}
                            onChange={handleChange} />
                    </label>
                    <label>Age
                        <StyledInput
                            type="number"
                            name="age"
                            placeholder={age}
                            value={profile.age}
                            onChange={handleChange} />
                    </label>
                    <label>Email
                        <StyledInput type="email"
                            name="email"
                            placeholder={email}
                            value={profile.email}
                            onChange={handleChange} />
                    </label>
                    <StyledFieldSet>
                        <label>Gender
                            <select type="text"
                                name="gender"
                                placeholder={gender}
                                value={profile.gender}
                                onChange={handleChange}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Transgender">Transgender</option>
                                <option value="Nonbinary">Nonbinary</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                        <label>Sexuality
                            <select name="sexuality"
                                placeholder={sexuality}
                                value={profile.sexuality}
                                onChange={handleChange}>

                                <option value="Gay">Gay</option>
                                <option value="Lesbian">Lesbian</option>
                                <option value="Bisexual">Bisexual</option>
                                <option value="Asexual">Asexual</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                        <label>Reason for Signing Up
                            <select name="reason_for_signup"
                                placeholder={reason_for_signup}
                                value={profile.reason_for_signup}
                                onChange={handleChange}>
                                <option value="STI Testing">STI Testing</option>
                                <option value="PrEP">PrEP</option>
                                <option value="HIV Testing">HIV Testing</option>
                                <option value="Counseling">Counseling</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                        <label>How'd You Hear About Us?
                            <select name="referred"
                                placeholder={referred}
                                value={profile.referred}
                                onChange={handleChange}>
                                <option value="Internet">Internet</option>
                                <option value="Friend">Friend</option>
                                <option value="Partner">Partner</option>
                                <option value="Healthcare Provider">Healthcare Provider</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>

                    </StyledFieldSet>


                    <input type="submit" />
                </StyledForm>
            </StyledFormWrapper>
        </>
    )
}

export default EditProfile