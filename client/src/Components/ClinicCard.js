import React from 'react'

function ClinicCard({ info }) {

    const { name, location, city, zip, hours, services, phone, accepting_new_patients, takes_uninsured } = info

    return (
        <div>
            <h2>{name}</h2>
            <span>{location}, {city}, TX {zip}</span>
            <h2>Services Offered: {services}</h2>
            <h3>Open {hours}</h3>
            <h3>{phone}</h3>
            Takes Uninsured: {takes_uninsured ? "Yes" : "No"} <br />
            Accepting New Patients: {accepting_new_patients ? "Yes" : "No"}
        </div>
    )
}

export default ClinicCard