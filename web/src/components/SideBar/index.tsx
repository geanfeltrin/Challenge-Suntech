import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <section>
        <NavLink aria-label="Vizualizar map" to="/" activeClassName="selected" exact>
          Vizualizar map
        </NavLink>
        <NavLink aria-label="Adicionar uma residência" to="/create-residences" activeClassName="selected" exact>
          Adicionar uma residência
        </NavLink>
      </section>
    </Container>
  );
};

export default SideBar;
