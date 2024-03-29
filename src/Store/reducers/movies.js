/*
 * File: movies.js
 * Project: JL Movie
 * File Created: Wednesday, 20th May 2020 9:45:46 pm
 * Author: Joshu Lucas
 * -----
 * Last Modified: Wednesday, 20th May 2020 10:54:51 pm
 * Modified By: Joshu Lucas<adi.sreyaj@gmail.com>
 * -----
 */

import { ADD_MOVIES } from '../actions';

const initialState = { movies: [] };
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIES:
      const { payload } = action;
      return { movies: payload };
    default:
      return state;
  }
};

export default moviesReducer;
