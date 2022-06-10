import React from 'react'

function ClinicCard({ info }) {

    const { id, name, location, city, zip, hours, services, phone, accepting_new_patients, takes_uninsured } = info

    const addToFavorites = () => {
       
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