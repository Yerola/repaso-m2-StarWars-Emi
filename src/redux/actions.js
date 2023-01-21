import axios from 'axios';
import { GET_CHARACTER, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './constants';

export const getCharacter = (characterName) => {
  return (dispatch) => {
    axios(`https://swapi.dev/api/people/?search=${characterName}`)
      .then((response) => {
        dispatch({
          type: GET_CHARACTER,
          payload: response.data.results
        })
      })
  }
}

export const addToFavorites = (character) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: character
  }
}

export const removeFromFavorites = (name) => {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: name
  }
}