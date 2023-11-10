import React from 'react';
import { NavLink } from 'react-router-dom';
import PokemonLogo from '../assets/Pokemon-logo.jpg';
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar = () => (
  <div className="d-flex flex-row justify-content-between border-bottom bg-dark">
    <img src={PokemonLogo} height="50" alt="Pokemon-logo" className="ms-5" />
    <Dropdown className="mt-2 me-5">
      <Dropdown.Toggle variant="dark " id="dropdown-basic">
        Search Options
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><NavLink to="/" activeClassName="active-link"><span className="me-2"><small>Pokemon by Name</small></span></NavLink></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><NavLink to="/pokemons-type" activeClassName="active-link"><span><small>Pokemon by Type</small></span></NavLink></Dropdown.Item>
        <Dropdown.Item href="#/action-3"><NavLink to="/types-listing" activeClassName="link-style active-link"><span><small>Types Listing</small></span></NavLink></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>  
  </div>
);

export default NavBar;


