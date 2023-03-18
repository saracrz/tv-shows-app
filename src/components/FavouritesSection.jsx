import { IconX } from '@tabler/icons-react'
import "./styles.css";

export const FavouritesSection = ({ favourites, onRemoveFav }) => {
  return (
    <section >
      <h3>Favorites</h3>
      {favourites.map((favourite) => (
        <div className='favourite-item'>
          <li key={favourite.id}>{favourite}</li>
          <IconX onClick={onRemoveFav}/>
        </div>
      ))}
    </section>
  );
};
