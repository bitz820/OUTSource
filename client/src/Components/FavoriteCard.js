import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Button } from "./pages/Button"
import { toast } from 'react-toastify'
import randomColor from "randomcolor";

import { deleteFavorite } from "../Features/favoritesSlice"
import "./FavoriteCard.css"
function FavoriteCard({ data }) {

  const color = randomColor({
    luminosity: 'light',
    hue: 'red'
 });
  const favClinic = useSelector(state => state.favorites.find(favorite => favorite.clinic.id === data.id))

  const dispatch = useDispatch()

  const { name, location, url, services, hours, zip, accepting_new_patients, city, phone, takes_uninsured } = data


  const removeFavorite = () => dispatch(deleteFavorite(favClinic.id, toast))


  // if accepting new patients, link to webiste to scheudule appt!
  const linkToWebsite = accepting_new_patients ? <a
    href={url}
    target="_blank"
    rel='noreferrer'
  >
    <Button>Schedule an Appointment!</Button>
  </a>
    :
    "Currently not accepting new patients"

  const insuranceMessage = takes_uninsured ? "Accepting Patients without Insurance" : "Provider only takes Insured Patients"

  return (
    <div style={{backgroundColor: color}}  className="favorite-card">
      {/* Left side of card */}
      <div className='left'>
        <h2>{name}</h2>
        <p>{location} </p>
        <p>{city}, TX {zip}</p>
        <p>Open: {hours}</p>
        <Button className='btn--primary' onClick={removeFavorite}>Remove from Favorites</Button>
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