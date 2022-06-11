import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import {useNavigate} from  "react-router-dom"
import FavoriteCard from './FavoriteCard'
import { fetchFavorites } from "../Features/favoritesSlice"

function Favorites() {
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const favoritedClinics = useSelector(state => state.favorites)
  console.log(favoritedClinics)

  // const user = useSelector(state => state.user)
  // if (!user.id) {
  //   navigate("/")
  // }


  useEffect(() => {
    dispatch(fetchFavorites())
  }, [dispatch])

const renderFavorites = favoritedClinics.map(fav => <FavoriteCard key={fav.id} data={fav.clinic}/>)


return (

    <div>
      Favorites
    {renderFavorites}

    </div>
  )
}

export default Favorites