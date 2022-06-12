import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Outlet, useNavigate } from "react-router-dom"
import {setUser} from  "../Features/usersSlice"
import Login from '../Components/Login'

const ProtectedRoutes = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(setUser())
    }, [])

  return user.id ? <Outlet /> : < Login />
}

export default ProtectedRoutes