/*
 * File: Footer.js
 * Project: JL Movie
 * File Created: Saturday, 16th May 2020 11:46:50 pm
 * Author: Joshu Lucas
 * -----
 * Last Modified: Saturday, 16th May 2020 11:53:36 pm
 * Modified By: Joshu Lucas<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';

import styles from './Footer.module.css';
import movieLogo from '../../Assets/Images/jl-movie.svg';
import tmbdLogo from '../../Assets/Images/tmdb.svg';

export default function Footer() {
  return (
    <footer className={[styles.footer, 'box-layout'].join(' ')}>
      <img src={movieLogo} alt="JL Movie Logo" height="30px" />
      <p>JL Movie - Curate and Share your favorite movies</p>
      <img src={tmbdLogo} alt="TMBD Logo" />
    </footer>
  );
}
