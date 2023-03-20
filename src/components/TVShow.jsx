import { IconHeart } from "@tabler/icons-react";
import "./styles.css";

export const TVShow = ({ title, genres, image, addFavourite, ratingAverage, ended, url, onClick}) => {
  const mappedGenres = genres.length && genres.map(genre => `${genre}, `);

  return (
    <div className="tv-show">
      <div className="hover-div">
        {image && <IconHeart onClick={addFavourite} />}
        {image && <img src={image} />}
        <div className="hover-text">
          <li>{title}</li>
          <li>Rating average: {ratingAverage}</li>
          <li>Genres: {mappedGenres}</li>
          {ended && <li>Date: {ended}</li>}
        </div>
      </div>
    </div>
  );
};
