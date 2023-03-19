import { IconHeart } from "@tabler/icons-react";
import "./styles.css";

export const TVShow = ({ title, genres, image, addFavourite, ratingAverage, ended }) => {
  const mappedGenres = genres.length && genres.map(genre => `${genre}, `);
  return (
    <div className="tv-show">
      <div className="hover-div">
        <IconHeart onClick={addFavourite} />
        <img src={image} />
        <div className="hover-text">
          <li>{title}</li>
          <li>Rating average: {ratingAverage}</li>
          <li>Genres: {mappedGenres}</li>
          <li>Date: {ended}</li>
          More
        </div>
      </div>
    </div>
  );
};
