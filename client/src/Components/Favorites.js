import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FavoriteCard from './FavoriteCard'
import { fetchFavorites } from "../Features/favoritesSlice"

function Favorites() {
  const dispatch = useDispatch()

  const favoritedClinics = useSelector(state => state.favorites)

  useEffect(() => {
    dispatch(fetchFavorites())
  }, [dispatch])

const renderFavorites = favoritedClinics.map(fav => <FavoriteCard key={fav.clinic.id} data={fav.clinic}/>)


return (

    <div>
      Favorites
    {renderFavorites}

    </div>
  )
}

export default Favorites