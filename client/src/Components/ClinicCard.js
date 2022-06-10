import React from 'react'
import {useDispatch, useSelector} from "react-redux"

import {addFavoriteClinic} from "../Features/favoritesSlice"

function ClinicCard({ info }) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    // console.log(user)

    const { id, name, location, city, zip, hours, services, phone, accepting_new_patients, takes_uninsured } = info

    const addToFavorites = () => {
        const favoriteObj = {clinic_id: id, user_id: user.id}
        dispatch(addFavoriteClinic(favoriteObj))
    }

    return (
        <div style={{border: '1px solid black', display: 'flex', flexFlow: 'column', alignItems: 'center', margin: "15px"}}>
            <h2>{name}</h2>
            <span>{location}, {city}, TX {zip}</span>
            <h3>Services Offered: {services}</h3>
            <h4>Open {hours}</h4>
            <h4>{phone}</h4>
            Takes Uninsured: {takes_uninsured ? "Yes" : "No"} <br />
            Accepting New Patients: {accepting_new_patients ? "Yes" : "No"}
            <button onClick={addToFavorites}>Add to my Saved Clinics</button>
        </div>
    )
}

export default ClinicCard