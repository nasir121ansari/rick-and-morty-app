import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';

function CharacterList({ episodeId }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const url = episodeId
        ? `https://rickandmortyapi.com/api/episode/${episodeId}`
        : 'https://rickandmortyapi.com/api/character';

      try {
        const res = await axios.get(url);
        const characterUrls = episodeId ? res.data.characters : res.data.results.map(char => char.url);
        const characterData = await Promise.all(characterUrls.map(url => axios.get(url)));
        setCharacters(characterData.map(res => res.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchCharacters();
  }, [episodeId]);

  return (
    <Row>
      {characters.map((character) => (
        <Col md={4} key={character.id} className="mb-4">
          <Card>
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CharacterList;
