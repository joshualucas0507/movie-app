/*
 * File: reducer.js
 * Project: JL Movie
 * File Created: Tuesday, 19th May 2020 10:41:49 pm
 * Author: Joshu Lucas
 * -----
 * Last Modified: Wednesday, 20th May 2020 10:28:19 pm
 * Modified By: Joshu Lucas<adi.sreyaj@gmail.com>
 * -----
 */

import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions';

const initialState = {
  favorites: [],
};
const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.value],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item !== action.value),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
