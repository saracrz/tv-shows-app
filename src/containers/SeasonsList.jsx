import { Link } from "react-router-dom";
import './container.css'

export const SeasonsList = ({ seasons }) => {
  return (
    <div className="episodes-list">
      {seasons.map((season) => (
        <div className='episode' key={season.id}>
          {season.image && <img src={season.image.medium} />}
          <div className="hover-text">
            <li>Season number: {season.number}</li>
            <li>Episodes number: {season.episodeOrder}</li>
            {season.premiereDate && <li>Premiere date: {season.premiereDate}</li>}
          </div>
          <Link to={`/season/${season?.id}/episodes`}>See episodes</Link>
        </div>
      ))}
    </div>
  );
};
