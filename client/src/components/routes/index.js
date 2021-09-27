import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../components/pages/HomePage/HomePage';
import Signup from '../../components/pages/Signup/Signup';
import Login from '../../components/pages/Login/Login';
import Profile from '../../components/pages/Profile/Profile';

const Routes = ({ storeUser, loggedUser }) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/registro" render={(props) => <Signup {...props} />} />
      <Route exact path="/iniciar-sesion" render={(props) => <Login storeUser={storeUser} {...props} />} />
      <Route path="/perfil" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/iniciar-sesion" />} />
    </Switch>
  )
}

export default Routes
