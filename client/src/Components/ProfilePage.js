import React, { useSyncExternalStore } from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import { BsFilePersonFill } from "react-icons/bs"
import { AiFillPhone, AiOutlineContacts, AiFillInfoCircle, AiFillQuestionCircle } from "react-icons/ai"
import { deleteAccount } from "../Features/usersSlice"
import { CircleBanner, ProfileBody, ProfileButtonContainer, ProfileContainer, ProfileHeader, WarningButton, ProfileStats, ProfileLeft, ProfileTitle } from "./Styles"
import { Button } from './pages/Button'

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
      <ProfileTitle>
        <h1>Profile Details</h1>
        <WarningButton
          className="btn--red"
          onClick={deleteUser}>Delete Account</WarningButton>
      </ProfileTitle>

      <ProfileContainer>
        <ProfileHeader>
          <div>
            <h1>{user.first_name} {user.last_name}</h1>
            <h5>{user.email}</h5>
          </div>
          <CircleBanner style={{ background: bannerBg(sexuality) }}>
            {sexuality !== "Other"? sexuality : null}
            <br />PRIDE
          </CircleBanner>
        </ProfileHeader>
        <ProfileBody>
        <ProfileLeft>
            <h4>About</h4>
            <ProfileStats className='profile__stats'>
              <BsFilePersonFill />
              <p>{user.age} y.o. {user.sexuality !== "Other" ? sexuality : null} {user.gender === "Male" || user.gender === "Female" ? user.gender : "Person"}</p>
            </ProfileStats>
            <h4>Emergency Contact</h4>
            <ProfileStats className='profile__contact'>
              <AiOutlineContacts />
              <p>{user.contact_name}</p>
            </ProfileStats>
            <ProfileStats>
              <AiFillPhone />
              <p>{user.phone}</p>
            </ProfileStats>
            <h4>User Needs</h4>
            <ProfileStats className='profile__trackings'>

              <AiFillInfoCircle />
              <p>Searching for: {user.reason_for_signup}</p>
            </ProfileStats>
            <ProfileStats>
              <AiFillQuestionCircle />
              <p>Referred by: {user.referred}</p>
            </ProfileStats>
</ProfileLeft>

          {/* <ProfileButtonContainer>
            import premade button
          </ProfileButtonContainer> */}
        </ProfileBody>
          <Button onClick={goToEditProfile}>Edit Profile</Button>
      </ProfileContainer >
    </>
  )
}

export default ProfilePage