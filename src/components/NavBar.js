import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="d-flex flex-row justify-content-between border-bottom">
    <div className="mx-3">Pokemons Collection</div>
    <div>
      <NavLink to="/" activeClassName="active-link"><span className="me-3">Search for Pokemons</span></NavLink>
      <NavLink to="/pokemons-listing" activeClassName="link-style active-link"><span className="me-3">Pokemons Listing</span></NavLink>
    </div>
  </div>
);

export default NavBar;
