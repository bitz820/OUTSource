import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux"
// import { fetchClinics } from "./clinicsSlice";

import ClinicContainer from "./ClinicContainer";

function App() {
  // const [clinics, setClinics] = useState([]);
  // const allClinics = useSelector(state => (state.clinics.entities))

  // const dispatch = useDispatch()



  // useEffect(() => {
  //   dispatch(fetchClinics())
  // }, [dispatch]);

  // console.log(clinics)

  return (
    <div className="App">
      <Routes>
        <Route exact path="/clinics" element={<ClinicContainer />} />
      </Routes>
    </div>
  );
}

export default App;