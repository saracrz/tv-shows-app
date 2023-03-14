import {useState} from 'react'
import { TVShow } from "./TVShow";
import { FavouritesSection } from './FavouritesSection'
import './styles.css';

export const TVShowsSection = ({shows, addFavourite}) => {
  const [favourites, setFavourites] = useState([]); 
  
  const addFavouriteShow = (show) => {
    const favouriteList = [...favourites, show];
    console.log(show, 'show');
    setFavourites(favouriteList)
  }

  return (
    <div className='container'>
    <div className='shows-list' >
      {shows.map(singleshow => (
        <TVShow key={singleshow.id} 
        title={singleshow?.name} 
        image={singleshow?.image.medium}  
        addFavourite={() => addFavouriteShow(singleshow?.name)}
        />
        ))}
    </div>
      <FavouritesSection favourites={favourites}/>
    </div>
  )
}