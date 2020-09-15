import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <section>
        <NavLink to="/" activeClassName="selected" exact>
          Vizualizar map
        </NavLink>
        <NavLink to="/create-residences" activeClassName="selected" exact>
          Adicionar uma residência
        </NavLink>
      </section>
    </Container>
  );
};

export default SideBar;
