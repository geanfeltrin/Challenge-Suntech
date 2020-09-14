import React from 'react';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <div className="content-title">
        <h1>Mapa de residências</h1>
        <small>
          Esse mapa é um mapa de calor informando o local da residência e a
          quantidade de membros.
        </small>
      </div>
    </Container>
  );
};

export default Home;
