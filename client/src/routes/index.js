import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './../../src/components/pages/HomePage/HomePage';
import Activities from '../components/pages/Activities/Activities';




const Routes = ({ storeUser, loggedUser }) => {
  return (
    
    <Switch>
      <Route exact path='/' render={() => <HomePage />} />
      <Route exact path='/activities' render={() => <Activities />} />
    </Switch>
  )
}
export default Routes