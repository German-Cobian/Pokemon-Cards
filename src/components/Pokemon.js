import React from 'react';
import './Style.css';

const Pokemon = (props) => {
  const {
    id, name, order, height, weight, base_experience
  } = props;

  const picture = `https://img.pokemondb.net/sprites/home/normal/${name}.png`

  return (
    <div className="d-flex flex-row justify-content-center">
      <div className="border border-dark rounded my-3 w-50" key={id}>
        <div className="d-flex flex-row justify-content-center">
          <img src={picture} className="mt-2" height='200' alt="pokemon-pic" />
        </div>
        <div className="info-row mb-5">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row" className="text-start">Id:</th>
                <td className="text-start">{id}</td>
                <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Name:</th>
                <td className="text-start text-capitalize">{name}</td>
                <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Order:</th>
                <td className="text-start">{order}</td>
                <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Height:</th>
                <td className="text-start">{height}</td>
                <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Weight:</th>
                <td className="text-start">{weight}</td>
                <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
              </tr>
              <tr>
                <th scope="row" className="text-start">Base Experience:</th>
                <td className="text-start">{base_experience}</td>
                <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
