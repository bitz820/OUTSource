import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./Features/usersSlice";

import NavBar from "./Components/NavBar"
import ClinicContainer from "./Components/ClinicContainer";
import Favorites from "./Components/Favorites";
import Login from "./Components/Login";
import ProfilePage from "./Components/ProfilePage";
import Home from "./Components/Home";
import Signup from "./Components/Signup";


function App() {

  



  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/clinics" element={<ClinicContainer />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;