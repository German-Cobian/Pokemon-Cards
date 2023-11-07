import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="d-flex flex-row justify-content-between border-bottom">
    <div className="mx-3">Pokemons Collection</div>
    <div>
      <NavLink to="/" activeClassName="active-link "><span className="mx-3">Pokemons All</span></NavLink>
    </div>
  </div>
);

export default NavBar;
