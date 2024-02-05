/*
 * File: Login.js
 * Project: JL Movie
 * File Created: Monday, 18th May 2020 11:07:29 pm
 * Author: Joshu Lucas
 * -----
 * Last Modified: Monday, 18th May 2020 11:30:06 pm
 * Modified By: Joshu Lucas<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import styles from './Login.module.css';
export default function Login() {
  return (
    <div className={styles.login}>
      <section className={styles.login__form}>
        <p>Login</p>
      </section>
      <section className={styles.login__aside}></section>
    </div>
  );
}
