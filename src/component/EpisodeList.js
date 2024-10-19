import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

function EpisodeList({ onSelect, selectedEpisode }) {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode')
      .then(res => setEpisodes(res.data.results))
      .catch(console.error);
  }, []);

  return (
    <ListGroup>
      {episodes.map((episode) => (
        <ListGroup.Item
          key={episode.id}
          action
          onClick={() => onSelect(episode.id)}
          className={selectedEpisode === episode.id ? 'active' : ''}
        >
          {episode.name} ({episode.episode})
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default EpisodeList;
