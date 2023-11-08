import React from 'react';

const Pokemons = (props) => {
  const {
    id, name, url,
  } = props;

  return (
    <>
      <div className="" key={id}>
        <div>
          <h4 className="">{id}</h4>
          <h4 className="">{name}</h4>
          <h4 className="">{url}</h4>
        </div>
      </div>
    </>
  );
};

export default Pokemons;
