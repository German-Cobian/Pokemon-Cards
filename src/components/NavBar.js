import React from 'react';
import { NavLink } from 'react-router-dom';
import PokemonLogo from '../assets/Pokemon-logo.png';

const NavBar = () => (
  <div className="d-flex flex-row justify-content-between border-bottom bg-dark">
    <img src={PokemonLogo} height="50" alt="Pokemon-logo" className="ms-4" />
    <div className="mt-3 me-4">
        <NavLink to="/" activeClassName="active-link"><span className="me-2"><small>Pokemon by Name</small></span></NavLink>
        <NavLink to="/pokemons-type" activeClassName="active-link"><span className="me-2"><small>Pokemon by Type</small></span></NavLink>
        <NavLink to="/types-listing" activeClassName="link-style active-link"><span className=""><small>Types Listing</small></span></NavLink>
    </div>
  </div>
);

export default NavBar;


