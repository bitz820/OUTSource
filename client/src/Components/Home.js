import React from 'react'
import { ComponentContainer1, ComponentContainer2 } from './Styles'
import outsource from "../media/outsource.jpeg"
import outsource2 from "../media/outsource2.jpeg"
import outsource3 from "../media/outsource3.jpeg"
import HeroSection from './HeroSection'
function Home() {

  return (
    <>
      <div>
        <h1>OUTSource</h1>
        <em>Queer Care. Simple.</em>
      </div>
      <HeroSection />
      {/* <ComponentContainer1 className="component-container">
        <h2>
          We at OUTSource are passionate about finding and delivering the best, state-of-the-art sexual health services – regardless of race, creed, gender, gender identity, or sexual orientation – without judgment or stigma. 

        </h2>
        <div className='image container'>
          <img src={outsource} alt="OUTSource home" />
          <img src={outsource2} alt="OUTSource home" />
        </div>
      </ComponentContainer1>
      <ComponentContainer2 className="component-container">
        <div className='image container'>
          <img src={outsource3} alt="OUTSource event" />
        </div>
        <h2>
          We at OUTSource are passionate about finding and delivering the best, state-of-the-art sexual health services – regardless of race, creed, gender, gender identity, or sexual orientation – without judgment or stigma. 

        </h2>
      </ComponentContainer2>
      <ComponentContainer1 className="component-container">
        <div className='image container'>
          <img src={outsource3} alt="OUTSource home" />
          <img src={outsource2} alt="OUTSource home" />
        </div>
        <h2>
          We at OUTSource are passionate about finding and delivering the best sexual and mental health services for every gender, gender identity, or sexual orientation without judgment or stigma. 

        </h2>
      </ComponentContainer1>
      <ComponentContainer1>

      </ComponentContainer1> */}

    </>
  )
}

export default Home