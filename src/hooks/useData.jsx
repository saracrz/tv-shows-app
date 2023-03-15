import { useState, useEffect } from "react";

export const useData = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const addPage = () => setPage(page + 1);

  const getData = async () => {
    const response = await fetch(`https://api.tvmaze.com/shows?page=${page}`);
    const tvShows = await response.json();

    setData(tvShows);
  };

  return {
    addPage,
    getData,
    data,
    page,
  };
};
