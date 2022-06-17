import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaBlogger, FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { GiRainbowStar } from "react-icons/gi"

function Footer() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")

    const handleSubscribe = (e) => {
        e.preventDefault()
        toast.success("Thanks for subscribing!", {
            icon: "👍🏻",
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        navigate("/")
    }

    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Want to learn more? Drop your email and get on our list!
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <form>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className='footer-input'
                        name='email'
                        id='email'
                        type='email'
                        placeholder='Your Email'
                    />
                    <button className='btn' id='subscribe' onClick={handleSubscribe}>Subscribe! </button>
                </form>

            </section>
            <div className='footer-links'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <a
                        href='https://www.linkedin.com/in/mark-bacon-jr/details/recommendations/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Testimonials
                    </a>
                    < a
                        href='https://www.linkedin.com/in/mark-bacon-jr/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Careers
                    </a>
                    <a
                        href="https://account.venmo.com/u/bitz820"
                        target="_blank"
                        rel='noreferrer'
                    >
                        Investors
                    </a>
                    <a
                        href='https://www.termsfeed.com/live/afbc0f48-2947-4e3b-b132-a941536d189a'
                        target="_blank"
                        rel='noreferrer'
                    >
                        Terms of Service
                    </a>
                    <NavLink to='/signup'>
                        How we work
                    </NavLink>
                </div>
                <div className='footer-link-items'>
                    <h2>Resources</h2>
                    <a
                        href="https://blog.lighthouse.lgbt/"
                        target="_blank"
                        rel='noreferrer'
                    >
                        Blogs
                    </a>
                    <a
                        href='https://kindclinic.org/blog/'
                        target="_blank"
                        rel='noreferrer'
                    >
                        News
                    </a>
                    <a
                        href='https://www.socialbakers.com/blog/lgbtq-influencers'
                        target="_blank"
                        rel='noreferrer'
                    >
                        Influencers
                    </a>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <a
                        href="mailto:mark.n.bacon.jr@gmail.com"
                        target="_blank"
                        rel='noreferrer'
                    >
                        Contact
                    </a>
                    <a
                        href="https://account.venmo.com/u/bitz820"
                        target="_blank"
                        rel='noreferrer'
                    >
                        Support
                    </a>
                    <a
                        href="https://account.venmo.com/u/bitz820"
                        target="_blank"
                        rel='noreferrer'
                    >
                        Sponsorships
                    </a>
                </div>
            </div>

            <section className='social-media'>
                <div className='footer-logo'>
                    <NavLink to='/' className='social-logo'>
                        <GiRainbowStar className='navbar-icon' />
                        OUTSource
                    </NavLink>
                </div>
                <small className='website-rights'>OUTSource 2022</small>
                <div className='social-icons'>
                    <a
                        className='social-icon-link'
                        href='https://github.com/bitz820'
                        rel='noreferrer'
                        target='_blank'
                        aria-label='Instagram'
                    >
                        <FaGithub />
                    </a>
                    <a
                        className='social-icon-link'
                        href='https://www.linkedin.com/in/mark-bacon-jr/'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='LinkedIn'
                    >
                        <FaLinkedin />
                    </a>
                    <a href="https://medium.com/@mark.n.bacon.jr"
                        className='social-icon-link'
                        target='_blank'
                        rel='noreferrer'
                        aria-label='Medium'
                    >
                        <FaBlogger />
                    </a>
                    <a href="https://www.youtube.com/watch?v=whSRWhwuqWg"
                        className='social-icon-link'
                        rel='noreferrer'
                        target='_blank'
                        aria-label='Youtube'
                    >
                        <FaYoutube />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Footer;