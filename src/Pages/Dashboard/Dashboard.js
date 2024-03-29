/*
 * File: Dashboard.js
 * Project: JL Movie
 * File Created: Monday, 18th May 2020 11:19:25 pm
 * Author: Joshu Lucas
 * -----
 * Last Modified: Tuesday, 19th May 2020 10:11:03 pm
 * Modified By: Joshu Lucas<adi.sreyaj@gmail.com>
 * -----
 */

import React, { useState, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Backdrop from '../../Components/Backdrop/Backdrop';
const MovieDetail = lazy(() => import('../MovieDetail/MovieDetail'));

export default function Dashboard() {
  const [menuDisplay, setMenuDisplay] = useState(false);

  const toggleMenu = () => {
    setMenuDisplay((prevState, _) => {
      return !prevState;
    });
  };
  return (
    <div className="App">
      <Header menuToggled={() => toggleMenu()} enabled={menuDisplay} />
      <Backdrop enabled={menuDisplay} />
      <Switch>
        <Route path="/about" exact component={About} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Suspense fallback={<p>Loading..</p>}>
        <Route
          path="/details/:id"
          render={(props) => <MovieDetail {...props} />}
        />
      </Suspense>

      <Footer />
    </div>
  );
}
