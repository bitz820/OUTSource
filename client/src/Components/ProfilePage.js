import React from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import { deleteAccount } from "../Features/usersSlice"
import { CircleBanner, ProfileBody, ProfileContainer, ProfileHeader } from "./Styles"

function ProfilePage() {
  const user = useSelector(state => state.user)
  const sexuality = useSelector(state => state.user.sexuality)
  console.log(sexuality)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const deleteUser = () => {
    dispatch(deleteAccount(user.id, toast))
    navigate("/")
  }

  const goToEditProfile = () => {
    navigate("/editProfile")
  }

  const defaultBanner = `linear-gradient(#ffadad, #ffd6a5, #fdffb6, #caffbf, #9bf6ff, #a0c4ff, #bdb2ff, #ffc6ff, #fffffc)`
  const lesbianBanner = `linear-gradient(#d62800, #ff9b56, #ffffff, #d462a6, #a40062)`
  const biBanner = `linear-gradient(#b00b69, #a55ea7, #1d1cc9)`
  const asexBanner = `linear-gradient(#000000, #a3a3a3, #ffffff, #ffffff, #800080, #800080)`

  const bannerBg = (sexuality) => {
    switch (sexuality) {
      case "Lesbian":
        return lesbianBanner

      case "Bisexual":
        return biBanner

      case "Asexual":
        return asexBanner

      default:
        return defaultBanner
    }
  }

  return (
    <>

      <h1>Profile Details</h1>
      <ProfileContainer>
        <ProfileHeader className='profile__header'>
          <div>
            <h1>{user.first_name} {user.last_name}</h1>
            <h5>{user.email}</h5>
          </div>
          <CircleBanner style={{ background: bannerBg(sexuality) }}>
            {sexuality}
            <br />PRIDE
          </CircleBanner>
        </ProfileHeader>
        <ProfileBody className='profile__body'>
          <div className='profile__body__left'>
            <div className='profile__stats'>
              <>
                {/* USER ICON */}
              </>
              <p>Age: {user.age}</p>
              <p>Gender: {user.gender}</p>
              <p>Sexuality: {user.sexuality}</p>
            </div>
            <div className='profile__contact'>
              <>
                {/* PHONE BOOK ICON */}
              </>
              <p>Emergency Contact Name</p>
              <>
                {/* PHONE ICON */}
              </>
              <p>Emergency Contact Number</p>
            </div>
            <div className='profile__trackings'>
              <>
                {/* INFO ICON */}
              </>
              <p>Reason for Account: {user.reason_for_signup}</p>
              <p>How'd you hear about us? {user.referred}</p>
            </div>

          </div>
            <div className='profile__body__right'>
              {/* import premade button */}
              <button onClick={goToEditProfile}>Edit Profile</button>
              <button onClick={deleteUser}>Delete Your Account</button>
            </div>
        </ProfileBody>
      </ProfileContainer >
    </>
  )
}

export default ProfilePage