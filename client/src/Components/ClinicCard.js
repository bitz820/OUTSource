import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import hivPic from "../media/hiv.png"
import prepPic from "../media/prep.png"
import psyPic from "../media/psy.png"
import stiPic from "../media/sti.png"

import {addFavoriteClinic} from "../Features/favoritesSlice"

function ClinicCard({ info }) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    // console.log(user)

    const { id, name, location, city, zip, hours, services, phone, accepting_new_patients, takes_uninsured } = info

    // get logos here!
    // const logos = services.split(", ")
    // console.log(logos)
    // const testing = logos.map(l => l === "HIV Testing")
    // console.log(testing)
const hiv = "HIV Testing"
const psy = "Counseling"
const sti = "STI Testing"
const prep = "PrEP"

const hivLogo = services.includes(hiv) ? <img src={hivPic} alt="hivTest" /> :  null
const psyLogo = services.includes(psy) ?  <img src={psyPic} alt="counseling" /> : null
const stiLogo = services.includes(sti) ? <img src={stiPic} alt="stiTest" /> : null
const prepLogo = services.includes(prep) ?  <img src={prepPic} alt="prep" /> : null


    const addToFavorites = () => {
        const favoriteObj = {clinic_id: id, user_id: user.id}
        dispatch(addFavoriteClinic(favoriteObj))
    }

    return (
        <div style={{border: '1px solid black', display: 'flex', flexFlow: 'column', alignItems: 'center', margin: "15px"}}>
            <h2>{name}</h2>
            <span>{location}, {city}, TX {zip}</span>
            <h3>Services Offered: {services}</h3>
            <div className="services-container">
            {hivLogo} {prepLogo} {stiLogo}  {psyLogo} 
            </div>
            <h4>Open {hours}</h4>
            <h4>{phone}</h4>
            Takes Uninsured: {takes_uninsured ? "Yes" : "No"} <br />
            Accepting New Patients: {accepting_new_patients ? "Yes" : "No"}
            <button onClick={addToFavorites}>Add to my Saved Clinics</button>
        </div>
    )
}

export default ClinicCard