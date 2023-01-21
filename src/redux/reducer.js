import { GET_CHARACTER, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "./constants"

const initialState = {
  results: [],
  favorites: [],
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        results: action.payload
      }

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
        // favorites: state.favorites.concat(action.payload)
      }

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((char) => char.name !== action.payload)
      }

    default:
      return state
  }
}