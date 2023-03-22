import { SeasonsList } from "../containers/SeasonsList.jsx";
import { Button } from "../components";
import { useEffect } from "react";
import { useData } from "../hooks/useData.jsx";
import { useParams, useNavigate } from "react-router-dom";

export const SeasonPage = () => {
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
        <Button onClick={() => navigate(`/`)} label='Home'/>
        <h1>Seasons</h1>
      </div>
      <SeasonsList seasons={seasons} />
    </>
  );
};
