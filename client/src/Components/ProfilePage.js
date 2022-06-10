import React from 'react'
import {useSelector} from "react-redux"

function ProfilePage() {
const user = useSelector(state => state.user)



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

      </div>
  )
}

export default ProfilePage