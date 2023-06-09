import { IconHeart } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import "./styles.css";

export const TVShow = ({
  title,
  genres,
  image,
  addFavourite,
  ratingAverage,
  ended,
  url,
}) => {
  const mappedGenres = genres.length && genres.map((genre) => `${genre}, `);

  return (
    <div className="tv-show">
      <div className="hover-div">
        <IconHeart onClick={addFavourite} />
        <img src={image} />
        <div className="hover-text">
          <li>{title}</li>
          <li>Rating average: {ratingAverage}</li>
          <li>Genres: {mappedGenres}</li>
          {ended && <li>Date: {ended}</li>}
          <Link to={url}>Go to seasons</Link>
        </div>
      </div>
    </div>
  );
};
