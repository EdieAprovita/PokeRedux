import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getPokemonAction } from '../redux/pokeDucks';

const Pokemons = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((store) => store.pokemons.pokemons);

  return (
    <div>
      <h1>Pokemons!</h1>
      <button onClick={() => dispatch(getPokemonAction())}>Get Pokemons</button>
      <ul>
        {pokemons.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemons;
