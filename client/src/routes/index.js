import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './../../src/components/pages/HomePage/HomePage';
import Profile from '../components/pages/Profile/Profile';
import Signup from '../components/pages/Signup/Signup';
import Login from '../components/pages/Login/Login';
import ActivityDetail from '../components/pages/Activities/ActivityDetail/ActivityDetail';
import Events from '../components/pages/EventsGym/Events';
import Activities from './../components/pages/Activities/Activities'
import ShopList from '../components/pages/Shop/ShopList';
import Cart from '../components/pages/Cart/Cart';

const Routes = ({ storeUser, loggedUser }) => {
  return (
    <Switch>
      <Route exact path='/' render={() => <HomePage />} />
      <Route exact path='/activities' render={() => <Activities loggedUser={loggedUser} />} /> 
      <Route path="/activity-detail/:id" render={(props) => <ActivityDetail {...props} />} />
      <Route exact path='/events' render={(props) => <Events {...props} loggedUser={loggedUser}/>} /> 
      <Route exact path='/profile' render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/login" />} />
      <Route exact path='/signup' render={(props) => <Signup {...props}/>} />
      <Route exact path='/login' render={(props) => <Login storeUser={storeUser} {...props}/>} />
      <Route exact path='/shop'  render={(props) => <ShopList loggedUser={loggedUser} {...props} />} />
      <Route exact path='/cart' render={(props) => <Cart loggedUser={loggedUser} {...props}/>} /> 
    </Switch>
  )
}
export default Routes
