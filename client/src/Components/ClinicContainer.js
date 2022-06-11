import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchClinics } from "../Features/clinicsSlice";
import ClinicCard from "./ClinicCard"

const ClinicContainer = () => {
  const [uninsuredFilter, setUninsuredFilter] = useState(null)

  const [serviceFilter, setServiceFilter] = useState("")

  console.log(serviceFilter)

  const allClinics = useSelector(state => state.clinics.clinics)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchClinics())
  }, [dispatch]);

  // FILTER FUNCTIONS GO HERE AND THEN WE USE THE RESULT TO RENDER CLINIC CARDS
const filterClinicsByService = allClinics.filter(c => c.services.includes(serviceFilter) || serviceFilter === "")

console.log(filterClinicsByService)



  
  // const toggleUninsured = () => {
  //   uninsuredFilter === null || uninsuredFilter === false ? setUninsuredFilter(true) : setUninsuredFilter(false)
  // }
  
  // console.log(uninsuredFilter)
  
  // const uninsured = allClinics.filter(c => c.takes_uninsured === uninsuredFilter)
  // console.log(uninsured)
  
  const renderClinicCards = filterClinicsByService.map(clinic => <ClinicCard key={clinic.id} info={clinic} />)
  return (
    <div>
      <h1>Clinics</h1>
      <label>
        <select name="services" onChange={(e)=> setServiceFilter(e.target.value)}>
          <option value="">--Please choose a service to filter--</option>
          <option value="">All Services</option>
          <option value="HIV Testing">HIV Testing</option>
          <option value="PrEP">PrEP</option>
          <option value="STI Testing">STI Testing</option>
          <option value="Counseling">Counseling</option>
        </select>
      </label>

      <label>
        Takes Uninsured?
        <input 
        type="checkbox" 
        value="takes_uninsured" 
        name="takes_uninsured" 
        // onChange={toggleUninsured}
        />
      </label>

      <input type="submit" />

      {renderClinicCards}
    </div>
  )
}

export default ClinicContainer