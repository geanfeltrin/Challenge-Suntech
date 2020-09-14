import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const TopBar: React.FC = () => {
  return (
    <Container>
      <Link to="/">Desáfio React</Link>
    </Container>
  );
};

export default TopBar;
