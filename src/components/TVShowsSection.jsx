import { useState, useEffect } from "react";
import { TVShow } from "./TVShow";
import { useData } from "../hooks/useData.jsx";
import { FavouritesSection } from "./FavouritesSection";
import { Search } from "./Search";
import "./styles.css";

export const TVShowsSection = ({ shows }) => {
  const {searchShows, results, query, setQuery } = useData();
  const [favourites, setFavourites] = useState([]);

  const addFavouriteShow = (show) => {
    const favouriteList = [...favourites, show];
    setFavourites(favouriteList);
  };

  const removeFavouriteShow = () => {
    const items = favourites;
    const removed = items.splice(-1); 
    const itemsCopy = [...items]
    setFavourites(itemsCopy);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchShows();
    setQuery('');
  };


  return (
    <>
      <div className="container">
        <div className="shows-list">
          <>
            {results.length
              ? results.map((result) => (
                  <div className="single-show">
                    <TVShow
                      key={result.id}
                      image={result.image.medium}
                      addFavourite={() => addFavouriteShow(result?.name)}
                    />
                  </div>
                ))
              : shows.map((singleshow) => (
                  <div className="single-show">
                    <TVShow
                      key={singleshow?.id}
                      image={singleshow?.image?.medium}
                      addFavourite={() => addFavouriteShow(singleshow?.name)}
                    />
                  </div>
                ))}
          </>
        </div>
        <div className="section-fav">
        <Search value={query} onChange={handleChange} onSubmit={handleSubmit} />
        <FavouritesSection favourites={favourites} onRemoveFav={removeFavouriteShow}/>
        </div>
      </div>
    </>
  );
};
