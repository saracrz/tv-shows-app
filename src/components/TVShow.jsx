import {IconHeart} from '@tabler/icons-react'
import './styles.css'

export const TVShow = ({ title, image, addFavourite}) => {
    return (
        <div className='tv-show'>
          <IconHeart onClick={addFavourite}/>
          <img src={image} />
        </div>
    )
}