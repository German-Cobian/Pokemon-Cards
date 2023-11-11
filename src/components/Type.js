import React from 'react';

const Type = (props) => {
  const {
    id, name,
  } = props;

  const picture = `https://img.pokemondb.net/sprites/home/normal/${name}.png`

  return (
    <div className="">
      <div className="border border-dark rounded my-3" key={id}>
        <div className="d-flex flex-row justify-content-center">
          <img src={picture} className="mt-2" height='200' alt="pokemon-pic" />
        </div>
        <div className="mx-5 mb-5">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row" className="text-start">Name:</th>
                <td className="text-start text-capitalize">{name}</td>
                <td><i className="fa fa-arrow-circle-o-right" aria-hidden="true" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Type;
