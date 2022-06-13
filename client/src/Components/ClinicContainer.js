import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchClinics } from "../Features/clinicsSlice";
import { motion } from 'framer-motion'
import Card from "./Card"

const ClinicContainer = () => {
  const [insuranceChecked, setInsuranceChecked] = useState(false)
  const [newPatientChecked, setNewPatientChecked] = useState(false)
  const [serviceFilter, setServiceFilter] = useState("")

  const allClinics = useSelector(state => state.clinics.clinics)
console.log(allClinics)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchClinics())
  }, [dispatch]);

  // FILTER FUNCTIONS GO HERE AND THEN WE USE THE RESULT TO RENDER CLINIC CARDS
  const filterClinicsByService = allClinics.filter(c => c.services.includes(serviceFilter) || serviceFilter === "")
  console.log(filterClinicsByService)

  const showUninsuredClinics = insuranceChecked ? filterClinicsByService.filter(c => c.takes_uninsured === insuranceChecked) : filterClinicsByService
  console.log(showUninsuredClinics)

  const showNewPatientsOnly = newPatientChecked ? showUninsuredClinics.filter(c => c.accepting_new_patients === newPatientChecked) : showUninsuredClinics
  console.log(showNewPatientsOnly)

  const renderClinicCards = showNewPatientsOnly.map(clinic => <Card key={clinic.id} info={clinic} />)
  return (
    <div>
      <h1>Clinics</h1>
      <div className="search-container">
        <label>
          <select name="services" onChange={(e) => setServiceFilter(e.target.value)}>
            <option value="">--Please choose a service to filter--</option>
            <option value="">All Services</option>
            <option value="HIV Testing">HIV Testing</option>
            <option value="PrEP">PrEP</option>
            <option value="STI Testing">STI Testing</option>
            <option value="Counseling">Counseling</option>
          </select>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="takes_uninsured"
            name="takes_uninsured"
            onChange={() => setInsuranceChecked(!insuranceChecked)}
          />
          Takes Uninsured?
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="takes_uninsured"
            name="takes_uninsured"
            onChange={() => setNewPatientChecked(!newPatientChecked)}
          />
          Search Only Clinics Accepting New Patients
        </label>
      </div>
      <motion.div layout className="wrapper">
        {renderClinicCards}
      </motion.div>
    </div>
  )
}

export default ClinicContainer