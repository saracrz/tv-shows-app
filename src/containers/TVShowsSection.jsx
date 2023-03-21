import { useState, useEffect } from "react";
import { TVShow } from "../components/TVShow";
import { useData } from "../hooks/useData.jsx";
import { FavouritesSection } from "../components/FavouritesSection";
import { Search } from "../components/Search";
import "./container.css";

export const TVShowsSection = ({ shows }) => {
  const { searchShows, results, query, setQuery } = useData();
  const [favourites, setFavourites] = useState([]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favourites", JSON.stringify(items));
  };

  useEffect(() => {
    setFavourites(JSON.parse(localStorage.getItem("favourites")));
  }, []);

  const addFavouriteShow = (show) => {
    const newFavouriteList = [...favourites, show];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteShow = () => {
    const items = favourites;
    const removed = items.splice(-1);
    const itemsCopy = [...items];
    setFavourites(itemsCopy);
    saveToLocalStorage(itemsCopy);
  };

  const handleChangeQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchShows();
    setQuery("");
  };

  return (
    <>
      <div className="tv-shows-container">
        <div className="shows-list">
          {results.length > 0
            ? results.map((result) => (
                <div className="single-show" key={result?.id}>
                  <TVShow
                    addFavourite={() => addFavouriteShow(result?.name)}
                    genres={result.genres}
                    image={result?.image?.medium}
                    ratingAverage={result.rating.average}
                    title={result.name}
                    ended={result.ended}
                  />
                </div>
              ))
            : shows?.length &&
              shows.map((singleshow) => (
                <div className="single-show" key={singleshow.id}>
                  <TVShow
                    addFavourite={() => addFavouriteShow(singleshow?.name)}
                    genres={singleshow.genres}
                    image={singleshow?.image?.medium}
                    ratingAverage={singleshow.rating.average}
                    title={singleshow.name}
                    ended={singleshow.ended}
                    url={`/seasons/${singleshow?.id}`}
                  />
                </div>
              ))}
        </div>
        <div className="section-fav">
          <Search
            value={query}
            onChange={handleChangeQuery}
            onSubmit={handleSubmit}
          />
          <FavouritesSection
            favourites={favourites}
            onRemoveFav={removeFavouriteShow}
          />
        </div>
      </div>
    </>
  );
};
