import React from 'react'
import { NavLink } from 'react-router-dom'
import {Button} from "../Components/Button"
import { useDispatch, useSelector } from "react-redux"
import hivPic from "../media/hiv.png"
import prepPic from "../media/prep.png"
import psyPic from "../media/psy.png"
import stiPic from "../media/sti.png"


function Card({info}) {

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


    return (
        <div>
            <div className="card__section">
                <div className="card__wrapper">
                    <h1 className="card__heading">
                        CLINIC
                    </h1>
                    <div className="card__container">
                        <NavLink to="/signup" className="card__container-card">
                            <div className="card__container-cardInfo">
                                <div className='icon'>
                                {hivLogo} {prepLogo} {stiLogo}  {psyLogo}
                                </div>
                                <h3>Starter</h3>
                                <h4>$8.99</h4>
                                <p>Per Month</p>

                                <ul className="card__container-features">
                                    <li>100 Transactions</li>
                                    <li>2% Cash Back</li>
                                    <li>10000 Limit</li>
                                </ul>
                                <Button buttonSize="btn--wide" buttonColor="primary">Choose Plan </Button>
                                </div>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Card