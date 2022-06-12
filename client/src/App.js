import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./Features/usersSlice";

import NavBar from "./Components/NavBar"
import ClinicContainer from "./Components/ClinicContainer";
import FavoritesContainer from "./Components/FavoritesContainer"
import Login from "./Components/Login";
import ProfilePage from "./Components/ProfilePage";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import EditProfile from "./Components/EditProfile"
import Footer from "./Components/pages/Footer"
import "./App.css"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUser())
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/clinics" element={<ClinicContainer />} />
        <Route exact path="/favorites" element={<FavoritesContainer />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/editProfile" element={<EditProfile />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;