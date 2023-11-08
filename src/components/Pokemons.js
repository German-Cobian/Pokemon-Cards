import React from 'react';

const Pokemons = (props) => {
  const {
    id, name, url,
  } = props;

  return (
    <>
      <div className="" key={id}>
        <div className="d-flex flex-row justify-content-around">
          <h4 className="ms-5">{name}</h4>
          <p className="ms-5">{url}</p>
        </div>
      </div>
    </>
  );
};

export default Pokemons;
