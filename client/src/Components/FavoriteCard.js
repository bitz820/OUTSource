import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify'

import { deleteFavorite } from "../Features/favoritesSlice"

function FavoriteCard({ data }) {


  const favClinic = useSelector(state => state.favorites.find(favorite => favorite.clinic.id === data.id))

  const dispatch = useDispatch()

  const { name, location, url, services, hours, zip, accepting_new_patients, city, phone, takes_uninsured } = data


  const removeFavorite = () => dispatch(deleteFavorite(favClinic.id, toast))


  const linkToWebsite = accepting_new_patients ? <a
    href={url}
    target="_blank"
    rel='noreferrer'
  >
    <button>Schedule an Appointment!</button>
  </a>
    :
    "Currently not accepting new patients"

  const insuranceMessage = takes_uninsured ? "✅ Currently accepting Patients without Insurance" : "⚠️ Provider only takes Insured Patients"

  return (
    <div className="favorite__wrapper">
      <div className="favorite__card">
        {/* Left side of card */}
        <div className='favorite__card__clinic__details'>
          <div className="favorite__card__top">
            <div>
              <h1 id="red">WHO:</h1>
              <p>{name}</p>
            </div>
            <div>
              <h1 id="orange">WHAT:</h1>
              <p>Offering {services}</p>
            </div>
          </div>
          <div className="favorite__card__bottom">
            <div>
              <h1 id="green">WHERE:</h1>
              <p>{location}
                <br />{city}, TX {zip}
              </p>

            </div>
            <div>
              <h1 id="blue">WHEN:</h1>
              Open {hours}
            </div>
          </div>
        </div>

        {/* Right Side of Card */}
        <div className='favorite__card__info'>
          <h1 id="purple">HOW Do I...</h1>
          <div>
            <h3>See About Insurance?</h3>
            <span>{insuranceMessage}</span>
          </div>
          <div>
            <h3>Get In Contact?</h3>
            📞{phone}
            <p>{accepting_new_patients ? linkToWebsite : null}</p>
          </div>
          <div>
            <h3>Rescind a Care Request?</h3>
            <button className='warning__button' onClick={removeFavorite}>Remove from Favorites</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FavoriteCard