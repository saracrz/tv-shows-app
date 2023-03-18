import { useEffect, useState } from "react";
import { useData } from "../hooks/useData.jsx";
import { TVShowsSection, Search } from "../components";
import { Pagination } from "../components/Pagination";

export const Homepage = () => {
  const { data, page, decreasePage, increasePage, getData, results, query } = useData();
  const [loading, setIsLoading] = useState(true);

  
  useEffect(() => {
    getData();
    setIsLoading(false);
  }, [page]);


  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
    <><h1>Movies</h1></>
    <>
      <Pagination page={page} onLeftPagination={() => decreasePage(page)} onRightPagination={() => increasePage(page)} />
      <TVShowsSection shows={ data} />
      <Pagination page={page} addPagination={() => addPage(page)} />
    </>
    </>
  );
};
