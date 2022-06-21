import React from 'react'
import outsource from "../media/outsource.jpeg"
import outsource2 from "../media/outsource2.jpeg"
import outsource3 from "../media/outsource3.jpeg"
import outsource4 from "../media/outsource4.jpeg"
import outsource5 from "../media/outsource5.jpeg"
import outsource6 from "../media/outsource6.jpeg"
import outsource7 from "../media/outsource7.jpeg"
import logo from "../media/logo.png"

import sti from "../media/sti.png"
import prep from "../media/prep.png"
import psy from "../media/psy.png"
import hiv from "../media/hiv.png"

const Home = () => {

  return (
    <div className="home__container">
      <div>
      <img id="logo" src={logo} alt="logo" />

        {/* <h1>OUTSource</h1>
        <em>Queer Care. Simple.</em> */}
      </div>
      <div className="home__welcome">
        <h1 className='heading'>
          We at OUTSource are passionate about finding and delivering the best mental and sexual health services – regardless of race, gender, gender identity, or sexual orientation – without judgment or stigma.
        </h1>
      </div>
      <div className="home__hero-first">
        <div className="img__container">
          <img src={outsource} alt="placeholder" />
          {/* <img src={outsource2} alt="placeholder" /> */}
        </div>
        <div className="content__container">
          <h1>Health Care for YOU.</h1>
          <h3>A Note About COVID:</h3>
          <p>OUTSource's partners still require all individuals to wear a mask, be screened and practice social distancing. Please check with the individual provider and remain committed to controlling the spread of COVID-19.   Our patients, healthcare providers, and staff thank you!
          </p>
        </div>
      </div>
      <div className="home__hero-second">
        <div className="img__container">
          <img src={outsource2} alt="placeholder" />
          <img src={outsource4} alt="placeholder" />
        </div>
        <div className="content__container">
          <h1>OUTSource has partnered with Kind Clinic</h1>
          <h3>We have your best interest in mind.</h3>

          <p>
            We strive to empower our communities to embrace their sexual health and wellness without fear, shame or judgement. We accepts all Texans, providing PrEP, PEP, STI Testing & Treatment, HIV Testing & Care and Gender Affirming Care.
            Come see us. We'd like to see you!
          </p>

        </div>
      </div>
      <div className='services'>
        <h1 id='services__title'>Some Services We Offer...</h1>
        <div className="services__container">
          <div className="service__item" id='prep'>
            <img src={prep} alt="prep" />
            <h1>PrEP</h1>
            <p>Get Access to HIV Prevention Meds</p>
          </div>
          <div className="service__item" id='hiv'>
            <img src={hiv} alt="hiv testing" />
            <h1>HIV Testing</h1>
            <p>HIV Testing available regardless of your </p>
          </div>
          <div className="service__item" id='sti'>
            <img src={sti} alt="sti testing" />
            <h1>STI Testing & Treatment</h1>
            <p>Full Panel STI Testing and Treatment options, many offered at low to no cost</p>
          </div>
          <div className="service__item" id='psy'>
            <img src={psy} alt="counseling" />
            <h1>Counseling</h1>
            <p>Meet with queer therapists and have guided feedback on cultivating healthy relationships</p>
          </div>
          <div className="service__item" id='event'>
            <img src={outsource3} alt="events" />
            <h1>Events</h1>
            <p>Queer Events that support cultivating community</p>
          </div>
        </div>
      </div>


      <div className="home__hero-second">
        <div className="content__container">
          <h1>Community OUTReach</h1>
          <p>
            There's always a ton to do to meet people OUT!
          </p>
          <p>Get off the couch and  <a target="_blank"
            rel='noreferrer' href='https://members.austinlgbtchamber.com/events'>
              <button className="btn" id='check'>Check it OUT</button>
          </a>
          </p>
        </div>
        <div className="img__container">
          <img src={outsource5} alt="placeholder" />
          <img src={outsource7} alt="placeholder" />
          <img src={outsource6} alt="placeholder" />
        </div>
      </div>


    </div>
  )
}

export default Home