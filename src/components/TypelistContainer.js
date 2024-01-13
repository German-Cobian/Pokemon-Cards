import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayTypelist } from '../redux/actions/pokemons';
import './Style.css';

const TypelistContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayTypelist());
  }, [dispatch]);

  const pokemonsState = useSelector((state) => state.pokemons);

  return (

  <div className="d-flex flex-column mx-5">
    <h3 class="my-5">A Listing of all Pokemon Types</h3>
    <table className="table">
      <thead className="">
        <tr>
          <th scope="col">Type Name:</th>
          <th scope="col">Url:</th>
        </tr>
      </thead>
      <tbody>
        { pokemonsState.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default TypelistContainer;
