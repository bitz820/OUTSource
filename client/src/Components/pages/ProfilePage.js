import React from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import { BsFilePersonFill } from "react-icons/bs"
import { AiFillPhone, AiOutlineContacts, AiFillInfoCircle, AiFillQuestionCircle } from "react-icons/ai"
import { deleteAccount } from "../../Features/usersSlice"

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
      <div className='profile__title'>
        <h1>Profile Details</h1>
        < button className="warning__button btn"
          onClick={deleteUser}>Delete Account</button>
      </div>

      <div className="profile__container">
        <div className='profile__header'>
          <div>
            <h1>{user.first_name} {user.last_name}</h1>
            <h5>{user.email}</h5>
          </div>
          <div className="circle__banner" style={{ background: bannerBg(sexuality) }}>
            {sexuality !== "Other" ? sexuality : null}
            <br />PRIDE
          </div>
        </div >

        <div className="profile__body">
          <div className='profile__blurb'>
            <p>At OUTSource we believe you should be whoever you are.  That means if you come to identify yourself differently, you should be able to change your profile to reflect that!
            </p>
            <p>
              Ater all, your care correlates directly with your specific needs as a person.  Carry on!
            </p>
          </div>

          <div className='profile__details'>
            <h2 className='profile__info__header'>About</h2>
            <div className='profile__stats'>

              <BsFilePersonFill />
              <p>{user.age} y.o. {user.sexuality !== "Other" ? sexuality : null} {user.gender === "Male" || user.gender === "Female" ? user.gender : "Person"}</p>
            </div>
            <h2 className='profile__info__header'>Emergency Contact</h2>
            <div className='profile__stats'>
              <AiOutlineContacts />
              <p>{user.contact_name}</p>
            </div>
            <div className='profile__stats'>
              <AiFillPhone />
              <p>{user.phone}</p>
            </div>
            <h2 className='profile__info__header'>User Needs</h2>
            <div className='profile__stats'>
              <AiFillInfoCircle />
              <p>Searching for: {user.reason_for_signup}</p>
            </div>
            <div className='profile__stats'>
              <AiFillQuestionCircle />
              <p>Referred by: {user.referred}</p>
            </div>
            <div id='edit__div'>
            <button className='btn' id="edit" onClick={goToEditProfile}>Edit Profile</button>

            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default ProfilePage