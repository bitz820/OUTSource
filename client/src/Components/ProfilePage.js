import React from 'react'
import {useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import { toast } from 'react-toastify'
import {deleteAccount} from "../Features/usersSlice"

function ProfilePage() {
const user = useSelector(state => state.user)
const dispatch = useDispatch()
const navigate = useNavigate()

const deleteUser = () => {
  dispatch(deleteAccount(user.id, toast))
  navigate("/")
}

const goToEditProfile = () => {
  navigate("/editProfile")
}

console.log(user)
  return (
    <div>
      <h1>Profile Details</h1>
      <p>Name: {user.first_name} {user.last_name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>Sexuality: {user.sexuality}</p>
      <p>Reason for Account: {user.reason_for_signup}</p>
      <p>How'd you hear about us? {user.referred}</p>
      <button onClick={deleteUser}>Delete Your Account</button>
      <button onClick={goToEditProfile}>Edit Profile</button>
      </div>
  )
}

export default ProfilePage