import React from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "./pages/Button"
import { toast } from "react-toastify"
import randomColor from "randomcolor";
import { motion } from 'framer-motion'
// import { CardStyle } from './Styles'



import hivPic from "../media/hiv.png"
import prepPic from "../media/prep.png"
import psyPic from "../media/psy.png"
import stiPic from "../media/sti.png"

import "./Card.css"

import { addFavoriteClinic } from "../Features/favoritesSlice"
// import { CardStyle } from './Styles'

function Card({ info }) {
    const color = randomColor({
        luminosity: 'light',
        hue: 'red'
    }); const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    // console.log(user)

    const { id, name, location, city, zip, hours, services, phone, accepting_new_patients, takes_uninsured } = info

    const hiv = "HIV Testing"
    const psy = "Counseling"
    const sti = "STI Testing"
    const prep = "PrEP"

    const hivLogo = services.includes(hiv) ?
        <div>
            <img src={hivPic} alt="hivTest" />
            <p>HIV Testing</p>
        </div> : null

    const psyLogo = services.includes(psy) ?
        <div>
            <img src={psyPic} alt="counseling" />
            <p>Counseling</p>
        </div> : null

    const stiLogo = services.includes(sti) ?
        <div>
            <img src={stiPic} alt="stiTest" />
            <p>STI Testing</p>
        </div> : null

    const prepLogo = services.includes(prep) ?
        <div>
            <img src={prepPic} alt="PrEP" />
            <p>PrEP</p>
        </div> : null

    const addToFavorites = () => {
        const favoriteObj = { clinic_id: id, user_id: user.id }
        dispatch(addFavoriteClinic(favoriteObj, toast, navigate))
    }





    return (
        <motion.div layout >
            <div className='wrapper'>
                <div className="card" style={{ backgroundColor: color }}>
                    <div className="card__body">
                        <h1 className="card__title">{name} </h1>
                        <span>{location}, 
                         <br/>
                         {city}, TX {zip}</span>
                        <div className='card__description'>
                            {hivLogo} {prepLogo} {stiLogo}  {psyLogo}
                        </div>
                        <h3 className="card__stats">Open {hours}
                        </h3>
                        <h4 className="card__stats">{phone}</h4>
                    </div>
                        <Button onClick={addToFavorites} buttonSize="btn--wide" buttonColor="primary">Favorite This Clinic </Button>
                </div>
            </div >
        </motion.div>

    )
}

export default Card