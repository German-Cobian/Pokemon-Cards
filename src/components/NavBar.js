import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div className="d-flex flex-row justify-content-between border-bottom">
    <div className="mx-3">Pokemons Collection</div>
    <div>
      <NavLink to="/" activeClassName="active-link"><span className="me-3">Pokemon by Name</span></NavLink>
      <NavLink to="/pokemons-type" activeClassName="active-link"><span className="me-3">Pokemon by Type</span></NavLink>
      <NavLink to="/types-listing" activeClassName="link-style active-link"><span className="me-3">Types Listing</span></NavLink>
    </div>
  </div>
);

export default NavBar;
