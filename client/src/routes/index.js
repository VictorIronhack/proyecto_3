import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './../../src/components/pages/HomePage/HomePage';
import Profile from '../components/pages/Profile/Profile';
import Signup from '../components/pages/Signup/Signup';
import Login from '../components/pages/Login/Login';
import ActivitiesList from '../components/pages/Activities/ActivitiesList';


const Routes = ({ storeUser, loggedUser }) => {
  return (
    <Switch>
      <Route exact path='/' render={() => <HomePage />} />
      <Route exact path='/activities' render={() => <ActivitiesList />} />
      <Route exact path='/profile' render={() => <Profile />} />
      <Route exact path='/signup' render={() => <Signup />} />
      <Route exact path='/login' render={() => <Login />} />
    </Switch>
  )
}
export default Routes
