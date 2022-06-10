import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { updateAccountDetails} from "../Features/usersSlice"

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
        // password: userDetails.password_digest
    })
    console.log(userDetails)
    // console.log(profile)

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
        dispatch(updateAccountDetails(profile))
        navigate("/profile")
    }

    console.log(profile)

    return (
        <div>
            EditProfile
            <form onSubmit={updateDetails}>
                <label>First Name
                    <input type="text"
                        name="first_name"
                        placeholder={first_name}
                        value={profile.first_name}
                        onChange={handleChange} />
                </label>
                <label>Last Name
                    <input type="text"
                        name="last_name"
                        placeholder={last_name}
                        value={profile.last_name}
                        onChange={handleChange} />
                </label>
                <label>Age
                    <input type="text"
                        name="age"
                        placeholder={age}
                        value={profile.age}
                        onChange={handleChange} />
                </label>
                <label>Email
                    <input type="email"
                        name="email"
                        placeholder={email}
                        value={profile.email}
                        onChange={handleChange} />
                </label>
                <label>Gender
                    <input type="text"
                        name="gender"
                        placeholder={gender}
                        value={profile.gender}
                        onChange={handleChange} />
                </label>
                <label>Sexuality
                    <input type="text"
                        name="sexuality"
                        placeholder={sexuality}
                        value={profile.sexuality}
                        onChange={handleChange} />
                </label>
                <label>Reason for Account
                    <input type="text"
                        name="reason_for_signup"
                        placeholder={reason_for_signup}
                        value={profile.reason_for_signup}
                        onChange={handleChange} />
                </label>
                <label>How'd you hear about us?
                    <input type="text"
                        name="referred"
                        placeholder={referred}
                        value={profile.referred}
                        onChange={handleChange} />
                </label>
                <input type="submit" />
            </form>

        </div>
    )
}

export default EditProfile