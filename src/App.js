import React, { useState } from 'react';
import EpisodeList from './component/EpisodeList';
import CharacterList from './component/CharacterList';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <Container fluid>
      <Row>
        <Col xs={3}>
          <EpisodeList onSelect={setSelectedEpisode} selectedEpisode={selectedEpisode} />
        </Col>
        <Col xs={9}>
          <CharacterList episodeId={selectedEpisode} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
