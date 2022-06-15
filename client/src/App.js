import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./Features/usersSlice";
import { ToastContainer } from 'react-toastify';
import { AppStyle } from "./Components/Styles";
import NavBar from "./Components/NavBar"
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import EditProfile from "./Components/EditProfile"
import Login from "./Components/Login";
import ProfilePage from "./Components/ProfilePage";
import Footer from "./Components/pages/Footer"
import ProtectedRoutes from "./Components/ProtectedRoutes"
import ClinicContainer from "./Components/ClinicContainer";
import FavoritesContainer from "./Components/FavoritesContainer"
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUser())
  }, [])


  return (
    <App className="App">
      <NavBar />
      <ToastContainer
        theme="colored"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <Routes>
        {/* <Route exact path="/hero" element={<HeroSection/>} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/clinics" element={<ClinicContainer />} />
        <Route element={<ProtectedRoutes />}>
          <Route exact path="/favorites" element={<FavoritesContainer />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/editProfile" element={<EditProfile />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </App>
  );

}

export default App;