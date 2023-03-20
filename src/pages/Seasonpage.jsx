import { SeasonsList } from "../containers/SeasonsList.jsx";
import { useEffect } from "react";
import { useData } from "../hooks/useData.jsx";
import { useParams, useNavigate } from "react-router-dom";

export const Seasonpage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getSeasons, seasons, loading, setIsLoading } = useData();

  useEffect(() => {
    getSeasons(id);
    setIsLoading(false);
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className="seasons-container">
        <button onClick={() => navigate(`/`)}>Home</button>
        <h1>Seasons</h1>
      </div>
      <SeasonsList seasons={seasons} />
    </>
  );
};
