import { useState } from "react"

export const useData = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
      const response = await fetch(`https://api.tvmaze.com/shows`);
      const tvShows = await response.json();

      setData(tvShows);
   }

   return {
    getData, 
    data,
   }
}

