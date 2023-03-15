import { useEffect, useState } from "react";
import { useData } from "../hooks/useData.jsx";
import { TVShowsSection } from "../components/TVShowsSection.jsx";
import { Pagination } from "../components/Pagination";

export const Homepage = () => {
  const { data, page, addPage, getData } = useData();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
    setIsLoading(false);
  }, [page]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <Pagination page={page} addPagination={() => addPage(page)} />
      <TVShowsSection shows={data} />
      <Pagination page={page} addPagination={() => addPage(page)} />
    </>
  );
};
