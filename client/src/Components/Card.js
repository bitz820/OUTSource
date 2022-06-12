import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Button } from "./pages/Button"

import hivPic from "../media/hiv.png"
import prepPic from "../media/prep.png"
import psyPic from "../media/psy.png"
import stiPic from "../media/sti.png"

import "./Card.css"

import { addFavoriteClinic } from "../Features/favoritesSlice"

function Card({ info }) {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    // console.log(user)

    const { id, name, location, city, zip, hours, services, phone, accepting_new_patients, takes_uninsured } = info

    const hiv = "HIV Testing"
    const psy = "Counseling"
    const sti = "STI Testing"
    const prep = "PrEP"

    const hivLogo = services.includes(hiv) ?
        <div className='service'>
            <img src={hivPic} alt="hivTest" />
            <p>HIV Testing</p>
        </div> : null

    const psyLogo = services.includes(psy) ?
        <div className='service'>
            <img src={psyPic} alt="counseling" />
            <p>Counseling</p>
        </div> : null

    const stiLogo = services.includes(sti) ?
        <div className='service'>
            <img src={stiPic} alt="stiTest" />
            <p>STI Testing</p>
        </div> : null

    const prepLogo = services.includes(prep) ?
        <div className='service'>
            <img src={prepPic} alt="PrEP" />
            <p>PrEP</p>
        </div> : null

    const addToFavorites = () => {
        const favoriteObj = { clinic_id: id, user_id: user.id }
        dispatch(addFavoriteClinic(favoriteObj))
    }



    return (
        <div>
            <div className="card">
                <div className="card__body">
                    <h1 className="card__title">{name} </h1>
                        <span>{location}, {city}, TX {zip}</span>
                    <div className='card__description'>
                        {hivLogo} {prepLogo} {stiLogo}  {psyLogo}
                    </div>
                    <h3 className="card__price">Open {hours}
                        <br />
                        {phone}
                    </h3>
                    <Button onClick={addToFavorites} buttonSize="btn--wide" buttonColor="primary">Favorite This Clinic </Button>
                </div>
            </div>
        </div>
    )
}

export default Card