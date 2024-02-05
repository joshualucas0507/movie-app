/*
 * File: axios.js
 * Project: JL Movie
 * File Created: Saturday, 16th May 2020 7:15:15 pm
 * Author: Joshu Lucas
 * -----
 * Last Modified: Saturday, 16th May 2020 7:42:03 pm
 * Modified By: Joshu Lucas<adi.sreyaj@gmail.com>
 * -----
 */

import axios from 'axios';
import { env } from '../Config/AppConfig';
const apiKey = process.env.REACT_APP_TMDB_API;
const http = axios.create({
  baseURL: env.tmdbUrl,
  params: { apiKey },
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
