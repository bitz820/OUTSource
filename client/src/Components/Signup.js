// import React, {useEffect} from 'react'
// import {Link} from 'react-router-dom'
// import {useForm} from 'react-hook-form'
// import {useSelector, useDispatch} from "react-redux"
// import { signupUser, userSelector, clearState} from "../Features/userSlice"
// import {useNavigate} from "react-router-dom"
// import toast from "react-hot-toast"


// const Signup = () => {
//   const dispatch = useDispatch()
//   const {register, errors, handleSubmit} = useForm()
//   const navigate = useNavigate()

//   const {isFetching, isSuccess, isError, errorMessage} = useSelector(userSelector)

//   const onSubmit = (formData) => dispatch(signupUser(formData))

//   useEffect(() => {
//     return () => {
//       dispatch(clearState())
//     }
//   }, []) 

//   useEffect(() => {
//     if (isSuccess){
//       dispatch(clearState())
//       navigate("/")
//     }

//     if (isError){
//       toast.error(errorMessage)
//       dispatch(clearState())
//     }
//   }, [isSuccess, isError]) 

//   return (
//     <div>
//       Signup
//         <form 
//         onSubmit={ handleSubmit }
//         method="POST"
//         >
//           {/* ADD IN FORM ASAP */}
//         </form>
//         or you can <Link to="login"> Login</Link>
//     </div>
//   )
// }

// export default Signup