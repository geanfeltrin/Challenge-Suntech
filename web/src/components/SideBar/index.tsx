import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <NavLink to="/" activeClassName="selected">
        Vizualizar map
      </NavLink>
      <NavLink to="/create-residences" activeClassName="selected">
        Adicionar uma residência
      </NavLink>
    </Container>
  );
};

export default SideBar;
