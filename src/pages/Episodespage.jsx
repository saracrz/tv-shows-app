import { EpisodesList } from "../containers/EpisodesList.jsx";
import { Button } from "../components";
import { useEffect } from "react";
import { useData } from "../hooks/useData.jsx";
import { useParams, useNavigate } from "react-router-dom";

export const EpisodesPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getEpisodes, episodes, loading, setIsLoading } = useData();

  useEffect(() => {
    getEpisodes(id);
    setIsLoading(false);
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <>
      <div className="seasons-container">
        <Button onClick={() => navigate(`/`)} label='Home'/>
        <h1>Episodes</h1>
      </div>
      <EpisodesList episodes={episodes} />
    </>
  );
};
