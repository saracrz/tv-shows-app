import { IconX } from '@tabler/icons-react'
import "./styles.css";

export const FavouritesSection = ({ favourites, onRemoveFav }) => {
  return (
    <section>
      <h3>Favourites</h3>
      {favourites.length > 0 ? favourites?.map((favourite) => (
        <div className='favourite-item' key={favourite.id}>
          <li>{favourite}</li>
          <IconX onClick={onRemoveFav}/>
        </div>
      )): <>No favourites yet.</>}
    </section>
  );
};
