import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './../../src/components/pages/HomePage/HomePage';
import ActivitiesList from '../components/pages/Activities/ActivitiesList';


const Routes = ({ storeUser, loggedUser }) => {
  
  return (
    
    <Switch>
      <Route exact path='/' render={() => <HomePage />} />
      <Route exact path='/activities' render={() => <ActivitiesList />} />
    </Switch>
   
  )
}
export default Routes