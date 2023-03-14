import { AddFavourite } from './AddFavourite'
import './styles.css'

export const TVShow = ({ title, image, addFavourite}) => {
    return (
        <div className='tv-show'>
          <h3>{title}</h3>
          <img src={image} />
          <AddFavourite addFavourite={addFavourite}/>
        </div>
    )
}