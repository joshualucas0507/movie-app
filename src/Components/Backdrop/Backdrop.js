/*
 * File: Backdrop.js
 * Project: JL Movie
 * File Created: Friday, 15th May 2020 11:30:08 pm
 * Author: Joshua Lucas
 * -----
 * Last Modified: Sunday, 17th May 2020 1:39:24 pm
 * Modified By: Joshua Lucas<joshualucas0507@gmail.com>
 * -----
 */

import React from 'react';
import styles from './Backdrop.module.css';

export default function Backdrop({ enabled }) {
  let classes = [styles.backdrop];
  if (enabled) classes.push(styles.active);

  return <div className={classes.join(' ')}></div>;
}
