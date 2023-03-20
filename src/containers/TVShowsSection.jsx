import { useState } from "react";
import { Link } from "react-router-dom";

import { TVShow } from "../components/TVShow";
import { useData } from "../hooks/useData.jsx";
import { FavouritesSection } from "../components/FavouritesSection";
import { Search } from "../components/Search";
import "../components/styles.css";

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
            {results.length && results.length
              ? results.map((result) => (
               <div className="single-show">
                    <TVShow
                      addFavourite={() => addFavouriteShow(result?.name)}
                      key={result.id}
                      genres={result?.genres}
                      image={result?.image?.medium}
                      ratingAverage={result?.rating?.average}
                      title={result?.name}
                      ended={result?.ended}
                    />
               </div>
                ))
              : shows.length && shows.map((singleshow) => (
                  <div className="single-show">
                    <TVShow
                      addFavourite={() => addFavouriteShow(singleshow?.name)}
                      key={singleshow?.id}
                      genres={singleshow?.genres}
                      image={singleshow?.image?.medium}
                      ratingAverage={singleshow?.rating?.average}
                      title={singleshow?.name}
                      ended={singleshow?.ended}
                    />
                    <Link to={`/seasons/${singleshow?.id}`}>Seasons</Link>
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
