import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main';
import Footer from './components/Footer'
// import Games from './components/Games'

const Router = (props) => (
<Switch>
  <Route exact path='/' component={Main}/>
  <Route exact path='/banana' component={Footer} />
</Switch>
)
export default Router;