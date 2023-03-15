import {useState} from 'react'
import { TVShow } from "./TVShow";
import { FavouritesSection } from './FavouritesSection'
import { AddFavourite } from './AddFavourite'

import './styles.css';

export const TVShowsSection = ({shows, addFavourite}) => {
  const [favourites, setFavourites] = useState([]); 
  
  const addFavouriteShow = (show) => {
    const favouriteList = [...favourites, show];
    setFavourites(favouriteList)
  }

  return (
    <div className='container'>
      <div className='shows-list'>
        {shows.map(singleshow => (
          <div className='single-show'>
            <TVShow key={singleshow?.id} 
            image={singleshow?.image?.medium}  
            />
            <AddFavourite addFavourite={() => addFavouriteShow(singleshow?.name)}/>
          </div>
        ))}
      </div>
      <FavouritesSection favourites={favourites}/>
    </div>
  )
}