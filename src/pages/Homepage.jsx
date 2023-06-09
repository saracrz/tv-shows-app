import { useEffect } from "react";
import { useData } from "../hooks/useData.jsx";
import { TVShowsSection } from "../components";
import { Pagination } from "../components/Pagination";

export const HomePage = () => {
  const {
    data,
    loading,
    page,
    decreasePage,
    increasePage,
    getData,
    setIsLoading,
  } = useData();

  useEffect(() => {
    getData();
    setIsLoading(false);
  }, [page, loading]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <h1>TV-Shows</h1>
      <>
        <Pagination
          page={page}
          onLeftPagination={() => decreasePage(page)}
          onRightPagination={() => increasePage(page)}
        />
        <TVShowsSection shows={data} />
        <Pagination page={page} addPagination={() => addPage(page)} />
      </>
    </>
  );
};
