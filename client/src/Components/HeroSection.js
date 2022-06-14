import React from 'react';
import './HeroSection.css';
import outsource from "../media/outsource.jpeg"
import outsource2 from "../media/outsource2.jpeg"
import outsource3 from "../media/outsource3.jpeg"
import { Button } from './pages/Button';



function HeroSection() {
  return (
    <>
      <div
        className={'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'> 
                <h1 className={'heading'}>
                  We at OUTSource are passionate about finding and delivering the best, state-of-the-art sexual health services – regardless of race, creed, gender, gender identity, or sexual orientation – without judgment or stigma.
                </h1>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={outsource} alt="placeholder" className='home__hero-img' />
                <img src={outsource2} alt="placeholder" className='home__hero-img' />
              Place for Beauty, Truth, and Love.
                  <br />
                  <br />
                  OUTSource has your best interest in mind.
                  </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={'home__hero-section lightBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: 'row-reverse'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <p className='top-line dark'>
                  OUTSource's partners almost unanimously still require all individuals to wear a mask, be screened and practice social distancing. Please check with the individual provider and remain committed to controlling the spread of COVID-19.   Our patients, healthcare providers, and staff thank you!

                </p>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={outsource3} alt="placeholder" className='home__hero-img' />
              
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='home__hero-section darkBg'
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <h1 className='heading'>
                  Community Events
                </h1>
                <div className='top-line'>There's always a ton to do to meet people out! Get off the couch and <a target="_blank"
                            rel='noreferrer' href='https://members.austinlgbtchamber.com/events'><Button>Check it out!</Button></a></div>
                <p>
                </p>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                Picture
                <img src={null} alt="placeholder" className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default HeroSection;