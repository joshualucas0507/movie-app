/*
 * File: App.js
 * Project: my-first-app
 * File Created: Thursday, 7th May 2020 9:48:43 pm
 * Author: Joshu Lucas
 * -----
 * Last Modified: Tuesday, 19th May 2020 10:10:51 pm
 * Modified By: Joshu Lucas<adi.sreyaj@gmail.com>
 * -----
 */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
