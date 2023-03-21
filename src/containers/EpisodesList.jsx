import './container.css'

export const EpisodesList = ({ episodes }) => {
    return (
      <div className="episodes-list">
        {episodes.map((episode) => (
          <div className='episode' key={episode.id}>
            {episode.image && <img src={episode.image.medium} />}
            <div className="hover-text">
              <li>Episode: {episode.name}</li>
              <li>Episode number: {episode.number}</li>
              {episode.airdate && <li>Date: {episode.airdate}</li>}
            </div>
          </div>
        ))}
      </div>
    );
  };
  