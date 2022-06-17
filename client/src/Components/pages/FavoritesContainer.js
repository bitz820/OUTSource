import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FavoriteCard from '../FavoriteCard'
import { fetchFavorites } from "../../Features/favoritesSlice"

function FavoritesContainer() {
  const dispatch = useDispatch()
  const favoritedClinics = useSelector(state => state.favorites)
  console.log(favoritedClinics)


  useEffect(() => {
    dispatch(fetchFavorites())
  }, [dispatch])

  const renderFavorites = favoritedClinics.map(fav => <FavoriteCard key={fav.id} data={fav.clinic} />)

  return (
    <>
      <h1>Check out your favorites</h1>
      <div className='.favorite__wrapper'>
        {renderFavorites}
      </div>
    </>
  )
}

export default FavoritesContainer