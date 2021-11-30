import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main';
import Games from './components/Games';
// import Shows from './components/Shows';

const Router = (props) => (
<Switch>
  <Route exact path='/' component={Main}/>
  <Route exact path='/games' component={Games} />
</Switch>
)
export default Router;