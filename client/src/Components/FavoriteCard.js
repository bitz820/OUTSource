import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { toast } from 'react-toastify'

import { deleteFavorite } from "../Features/favoritesSlice"

function FavoriteCard({ data }) {


  const favClinic = useSelector(state => state.favorites.find(favorite => favorite.clinic.id === data.id))

  const dispatch = useDispatch()

  const { name, location, url, services, hours, zip, accepting_new_patients, city, phone, takes_uninsured } = data


  const removeFavorite = () => dispatch(deleteFavorite(favClinic.id, toast))


    const linkToWebsite = accepting_new_patients ? 
    <div className = "link__wrapper" >
    <a 
    id="appt" 
    href={url}
        target="_blank"
    rel='noreferrer'
><p>Schedule an Appointment!</p>
  </a>
    <div className="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
  </div >

  // </a>
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
          <div id="insurance">
            <h3>See About Insurance?</h3>
            <span>{insuranceMessage}</span>
          </div>
          <div className='contact__div'>
            <h3>Get In Contact?</h3>
            📞{phone}
            <p>{accepting_new_patients ? linkToWebsite : null}</p>
          </div>
          <div>
            <h3>Rescind a Care Request?</h3>
            <button className='btn warning__button' onClick={removeFavorite}>Remove from Favorites</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FavoriteCard