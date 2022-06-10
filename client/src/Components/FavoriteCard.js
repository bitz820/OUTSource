import React from 'react'

function FavoriteCard({ data }) {
  console.log(data)
  const { name, location, services, hours, zip, accepting_new_patients, city, phone, takes_uninsured } = data

  const redirectToWebsite = () => {
    console.log("YOU HAVE WORK TO DO HERE MARK")
    // SHOULD GRAB WEBSITE FROM COLUMN (NEED A NEW MIGRATION!!)
  }

  // if accepting new patients, link to webiste to scheudule appt!
  const linkToWebsite = accepting_new_patients ? <button onClick={redirectToWebsite}>Schedule an Appointment!</button> : "Currently not accepting new patients"

  const insuranceMessage = takes_uninsured ? "Accepting Patients without insurance" : "Provider only takes Insured Patients"

  return (
    <div className="favorite-card">
      {/* Left side of card */}
      <div className='left'>
        <h2>{name}</h2>
        <p>{location} </p>
        <p>{city}, TX {zip}</p>
        <p>Open: {hours}</p>
      </div>
      {/* Right Side of Card */}
      <div>
        <h3>{services}</h3>
        <p>{phone}</p>
        <p>{insuranceMessage}</p>
        {linkToWebsite}
      </div>
    </div>
  )
}

export default FavoriteCard