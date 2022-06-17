import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { updateAccountDetails } from "../../Features/usersSlice"


const EditProfile = () => {
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
        contact_name: userDetails.contact_name,
        phone: userDetails.phone,
    })

    const { first_name, last_name, gender, age, email, reason_for_signup, referred, sexuality, contact_name, phone } = userDetails

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
            <div className="form__wrapper">
                <form className="form" onSubmit={updateDetails}>
                    <h1>Edit Profile</h1>
                    <label>First Name
                        <input className='styled__input' type="text"
                            name="first_name"
                            placeholder={first_name}
                            value={profile.first_name}
                            onChange={handleChange} />
                    </label>
                    <label>Last Name
                        <input className='styled__input' type="text"
                            name="last_name"
                            placeholder={last_name}
                            value={profile.last_name}
                            onChange={handleChange} />
                    </label>
                    <label>Age
                        <input className='styled__input'
                            type="number"
                            name="age"
                            placeholder={age}
                            value={profile.age}
                            onChange={handleChange} />
                    </label>
                    <label>Email
                        <input className='styled__input' type="email"
                            name="email"
                            placeholder={email}
                            value={profile.email}
                            onChange={handleChange} />
                    </label>
                    <label>Emergency Contact
                        <input className='styled__input' type="text"
                            name="contact_name"
                            placeholder={contact_name}
                            value={profile.contact_name}
                            onChange={handleChange} />
                    </label>
                    <label>Emergency Contact Number
                        <input className='styled__input' type="text"
                            name="phone"
                            placeholder={phone}
                            value={profile.phone}
                            onChange={handleChange} />
                    </label>

                    <fieldset className="styled__fieldset">
                        <label>Gender
                            <select className='styled__input' type="text"
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
                            <select className='styled__input' name="sexuality"
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
                            <select className='styled__input' name="reason_for_signup"
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
                            <select className='styled__input' name="referred"
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
                    </fieldset>
                    <div className="swipe__btn">
                        <button className='btn'>
                            <div id="dub-arrow">
                                <img src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true" alt="" />
                            </div>
                            Submit Changes</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditProfile