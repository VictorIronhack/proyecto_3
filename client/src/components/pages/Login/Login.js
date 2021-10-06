import React, { Component } from 'react'
import AuthService from '../../../services/auth.service'

import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      pwd: ""
    }
    this.authService = new AuthService()
  }

  handleInput = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, pwd } = this.state

    this.authService.login(username, pwd)
      .then(res => {
        this.props.storeUser(res.data)
        this.props.history.push("/")
      })
      .catch(err => console.log(err))
  }

  render() {
    return (

      <div className="align">

        <div className="grid">
        <br/>
        <br/>
        <br/>
        <br/>


          <form onSubmit={this.handleFormSubmit} controlId="formBasicEmail" className="form login">

            <div className="form__field">
              <label for="login__username"><svg className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </svg><span className="hidden">Username</span></label>
              <input autocomplete="username" name="username" value={this.state.username} onChange={this.handleInput} type="text" placeholder="Enter username" required />
            </div>
            <br/>
            
            

            <div className="form__field">
              <label for="login__password"><svg className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </svg><span className="hidden">Password</span></label>
              
              <input name="pwd" value={this.state.pwd} onChange={this.handleInput} type="password" placeholder="Password" className="form__input" required />
            </div>
            <br/>

            <div className="form__field">
              <input type="submit" value="Log In" />
            </div>
            <br/>

          </form>

          <p className="text--center">NOT A MEMBER? - <a href='/signup'>SIGN UP HERE</a>  <svg className="icon">
            
          </svg></p>

        </div>
      </div>

  // <Container className='mt-5'>
  //   <Form onSubmit={this.handleFormSubmit}>
  //     <Form.Group className="mb-3" controlId="formBasicEmail">
  //       <Form.Label>Username</Form.Label>
  //       <Form.Control name="username" value={this.state.username} onChange={this.handleInput} type="text" placeholder="Enter username" />
  //     </Form.Group>

  //     <Form.Group className="mb-3" controlId="formBasicPassword">
  //       <Form.Label>Password</Form.Label>
  //       <Form.Control name="pwd" value={this.state.pwd} onChange={this.handleInput} type="password" placeholder="Password" />
  //     </Form.Group>

  //     <Button variant="primary btn-block" type="submit">
  //       Submit
  //     </Button>
  //   </Form>
  // </Container>


    )
  }
}

export default Login