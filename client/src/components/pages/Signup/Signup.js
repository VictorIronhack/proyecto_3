import React, { Component } from 'react'
import AuthService from '../../../services/auth.service'


class Signup extends Component {

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
    const { username, pwd, email } = this.state
    this.authService.signup(username, pwd, email)
      .then(res => this.props.history.push("/profile"))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="align">
      <br/>
      <br/>
        <div className="grid">
          <form onSubmit={this.handleFormSubmit} controlId="formBasicEmail" className="form login">
          <br/>
            <div className="form__field">
              <label for="login__username"><svg className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </svg><span className="hidden">Username</span></label>
              <input autocomplete="username" name="username" value={this.state.username} onChange={this.handleInput} type="text" placeholder="Username" required />
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
              <label for="login__username"><svg className="icon" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
              </svg><span className="hidden">e-Mail</span></label>
              <input name="email" value={this.state.email} onChange={this.handleInput} type="text" placeholder="e-Mail" className="form__input" required />
            </div>
            <br/>
            <div className="form__field">
              <input type="submit" value="Sign up" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup
      