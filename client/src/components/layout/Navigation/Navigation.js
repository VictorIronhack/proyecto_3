import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
import './Navigation.css'
import logo from '../../pages/Maps/markers/irongym.svg'
const authService = new AuthService()

export default function Navigation(props) {
  const logout = () => {
    authService.logout()
      .then(res => props.storeUser(null))
      .catch(err => console.log(err))
  }
  return (
    
    <Navbar bg="navbar" expand="md" className="colorB fixedNavigation">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Brand href="#home" >
          <Link className="nav-link" to="/">
            <div style={{backgroundColor: "rgba(255,255,255, 0.3)", borderRadius: "30%"}}>
            <img src={logo} alt="mancuerna" />
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            <Link className="nav-link" to="/activities">Activity</Link>


            <Link className="nav-link" to="/events">Events</Link>

            {props.loggedUser ?
              <>
                <Link className="nav-link" to="/profile">MyProfile</Link>
                <span className="nav-link" onClick={logout}>Logout</span>
                <Link className="nav-link" to="/cart">Your Cart</Link>
              </>
              :
              <>
                <Link className="nav-link" to="/signup">Sign Up</Link>
                <Link className="nav-link" to="/login">Log In</Link>
              </>
              }
              <Link className="nav-link" to="/shop">Our Shop</Link>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
