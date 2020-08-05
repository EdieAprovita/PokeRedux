import axios from 'axios';

//const
const dataInit = {
  pokemons: [],
};

const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';

//reducer
export default function pokeReducer(state = dataInit, action) {
  switch (action.type) {
    case GET_POKEMON_SUCCESS:
      return { ...state, pokemons: action.payload };

    default:
      return state;
  }
}

//actions
export const getPokemonAction = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
    );
    dispatch({
      type: GET_POKEMON_SUCCESS,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};
