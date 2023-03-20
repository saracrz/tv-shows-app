import { useState } from "react";

export const useData = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const increasePage = () => setPage(page + 1);
  const decreasePage = () => setPage(page - 1);


  const getData = async () => {
    const response = await fetch(`https://api.tvmaze.com/shows?page=${page}`);
    const tvShows = await response.json();

    setData(tvShows);
  };

  const searchShows = async () => {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const result = await response.json();
    const resultName = result.map(element => {
      return element.show;
    })

   setResults(resultName);
  }

  const getSeasons = async (id) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`);
    const seasons = await response.json();

    setSeasons(seasons);
  }

  const getEpisodes = async (id) => {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
    const episodes = await response.json();

    setEpisodes(episodes);
  }


  return {
    decreasePage,
    increasePage,
    getData,
    getEpisodes,
    getSeasons,
    searchShows, 
    setIsLoading,
    setResults,
    setQuery, 
    data,
    episodes,
    loading,
    page,
    query,
    results,
    seasons,
  };
};
