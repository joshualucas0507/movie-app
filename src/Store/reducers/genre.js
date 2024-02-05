/*
 * File: genre.js
 * Project: JL Movie
 * File Created: Wednesday, 20th May 2020 10:58:05 pm
 * Author: Joshu Lucas
 * -----
 * Last Modified: Wednesday, 20th May 2020 11:14:13 pm
 * Modified By: Joshu Lucas<adi.sreyaj@gmail.com>
 * -----
 */

import { ADD_GENRES } from '../actions';

const initialState = { genres: [] };
const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GENRES:
      const { payload } = action;
      return { genres: payload };
    default:
      return state;
  }
};

export default genreReducer;
