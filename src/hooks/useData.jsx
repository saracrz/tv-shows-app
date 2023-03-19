import { useState } from "react";

export const useData = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([]);

  const increasePage = () => setPage(page + 1);
  const decreasePage = () => setPage(page - 1);


  const getData = async () => {
    const response = await fetch(`https://api.tvmaze.com/shows?page=${page}`);
    const tvShows = await response.json();
    console.log(tvShows);
    setData(tvShows);
  };

  const searchShows = async () => {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const result = await response.json();
    const resultName = result.map(element => {
      return element.show;
    })

   setResults(resultName);
   return result;
  }


  return {
    decreasePage,
    increasePage,
    getData,
    searchShows, 
    setResults,
    setQuery, 
    data,
    page,
    query,
    results,
  };
};
