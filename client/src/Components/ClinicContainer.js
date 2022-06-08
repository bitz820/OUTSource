import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchClinics } from "../Features/clinicsSlice";
import ClinicCard from "./ClinicCard"

const ClinicContainer = () => {


  const [clinics, setClinics] = useState([]);
  const allClinics = useSelector(state => (state.clinics.entities))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchClinics())
  }, [dispatch]);

  console.log(allClinics)
  const renderClinicCards = allClinics.map(clinic => <ClinicCard key={clinic.id} info={clinic} />)


  return (
    <div>
      <h1>Clinics</h1>
      {renderClinicCards}
    </div>
  )
}

export default ClinicContainer