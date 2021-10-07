import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
import './Navigation.css'

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
        <Navbar.Brand href="#home" ><Link className="nav-link" to="/"><svg id="Layer_1" enable-background="new 0 0 40px 40px" height="40px" viewBox="0 0 512 512" width="40px" xmlns="http://www.w3.org/2000/svg"><g><path d="m256 22.002c-135.309 0-244.999 109.69-244.999 244.999 0 87.417 45.792 164.128 114.688 207.488l126.776 37.466c1.178.017 2.353.045 3.535.045 135.309 0 244.999-109.69 244.999-244.999s-109.69-244.999-244.999-244.999z" fill="#4fabf7"/><path d="m314.222 39.081c-7.142-3.556-17.381-9.596-25.434-18.123-22.206-23.515-77.279-33.723-103.432 4.45-1.677 2.448-4.027 4.35-6.719 5.597-13.044 6.044-44.811 27.996-13.255 83.12 7.528 13.15 12.405 24.168 15.4 33.395 5.873-6.654 11.173-14.561 11.374-21.603.208-7.269-1.837-12.872-3.48-17.374-1.878-5.144-3.119-8.541-.636-11.926 3.487-4.755 9.322-3.662 13.624-1.052 2.433 1.476 3.89 4.275 3.804 7.305l-.147 5.122c-.106 3.711 2.827 6.816 6.537 6.923 3.588.103 6.62-2.616 6.904-6.19 1.936-24.401 5.608-41.346 9.824-45.328 3.334-3.148 11.095-2.166 20.915-.923 11.447 1.448 25.552 3.236 40.836-.057-.09.369-.187.791-.286 1.233l2.303-3.185s11.913-4.33 22.429-11.278c3.765-2.487 3.475-8.097-.561-10.106z" fill="#3c58a0"/><path d="m178.637 31.005c-13.044 6.044-44.811 27.996-13.255 83.12 7.528 13.15 12.405 24.168 15.4 33.395 5.873-6.654 11.173-14.561 11.374-21.603.208-7.269-1.837-12.872-3.48-17.374-1.878-5.144-3.119-8.541-.636-11.926 3.487-4.755 9.321-3.662 13.624-1.052 2.433 1.476 3.891 4.275 3.804 7.305l-.147 5.122c-.106 3.711 2.827 6.816 6.538 6.923 3.588.103 6.62-2.616 6.904-6.19 1.82-22.937 5.173-39.283 9.071-44.47-40.407-2.064-42.479-38.845-42.479-38.845-1.675 2.445-4.026 4.347-6.718 5.595z" fill="#2a428c"/><path d="m251.377 231.677c-1.223-3.053-2.802-6.536-4.445-10.241l.03.157c-11.417-13.59-32.486-20.152-61.43-29.167-1.081-.524-16.24-3.745-25.158-14.763-1.784-2.205-4.18-5.908-4.586-8.95-20.695 20.047-71.786 78.835-51.261 154.384 15.091 55.547 18.209 112.388 18.242 149.53 26.694 17.331 56.972 29.603 89.479 35.467l29.174 3.463-.009.01c4.827.283 9.689.433 14.587.433.197 0 .393-.007.59-.007 2.768-19.344 12.74-87.682 22.672-139.147 11.685-60.546-27.885-141.169-27.885-141.169z" fill="#3c58a0"/><path d="m230.243 294.788c-41.366-20.046-26.652-66.863-22.709-77.393.464-1.239.275-2.627-.501-3.698-3.068-4.239-1.876-8.55-.697-11.011.562-1.172.477-2.501-.113-3.643-6.361-2.151-13.262-4.303-20.691-6.617-1.081-.524-16.24-3.745-25.158-14.763-1.784-2.205-4.18-5.908-4.586-8.95-20.695 20.047-71.786 78.835-51.261 154.384 15.091 55.547 18.209 112.388 18.242 149.53 26.694 17.331 56.972 29.603 89.479 35.467l29.174 3.463-.009.01c4.827.283 9.689.433 14.587.433.197 0 .393-.007.59-.007 2.768-19.344 12.74-87.682 22.672-139.147 1.632-8.458 2.263-17.309 2.142-26.276-20.316-14.414-13.818-33.685-51.161-51.782z" fill="#2a428c"/><path d="m201.651 336.875c-3.638-3.598-7.917-6.528-12.648-8.637-10.345-4.613-19.113-12.118-25.292-21.482.546 22.057 3.997 50.025 15.286 75.851 18.368 42.021 41.805 85.469 33.168 125.477 9.57 1.729 19.336 2.89 29.259 3.473 5.478-18.848 8.167-45.583-3.834-76.041-14.363-36.449-30.013-68.311-35.939-98.641z" fill="#bbea49"/><path d="m192.245 412.28c6.245-23.166 29.532-15.243 29.535-15.242-8.742-21.182-16.381-40.98-20.13-60.163-3.638-3.598-7.917-6.528-12.648-8.637-10.345-4.613-19.113-12.118-25.292-21.482.546 22.057 3.997 50.025 15.286 75.851 4.298 9.834 8.872 19.745 13.249 29.673z" fill="#9fd332"/><path d="m295.127 102.596c-10.35-17.286-2.77-42.133-2.77-42.133-29.976 7.456-56.587-5.838-64.761 1.881-6.418 6.061-9.308 34.215-10.254 46.028-.215 2.687-2.314 4.953-5.006 5.091-3.122.159-5.656-2.37-5.568-5.432l.148-5.173c.098-3.436-1.562-6.748-4.501-8.531-5.213-3.163-11.721-3.771-15.539 1.434-5.454 7.435 4.272 14.943 3.837 30.114-.267 9.326-10.285 20.555-17.967 27.827.626.338 1.176.835 1.542 1.52.383 1.465 3.859 13.4 16.853 19.649 13.005 6.251 33.76 18.388 42.555 21.959 1.883.764 3.777 2.117 5.462 3.79-.968-3.903-1.483-7.669-1.237-11.088 1.927-26.798 32.248-.024 42.035-6.878 14.879-10.419 3.331-44.813 11.155-46.675 15.971-3.801 14.366-16.097 4.016-33.383z" fill="#f9ba8f"/><path d="m206.767 108.031.148-5.173c.098-3.436-1.562-6.748-4.501-8.531-5.213-3.163-11.721-3.771-15.539 1.434-5.454 7.435 4.272 14.943 3.837 30.114-.267 9.326-10.285 20.555-17.967 27.827.626.338 1.176.835 1.542 1.52.383 1.465 3.859 13.4 16.853 19.649 13.005 6.251 33.759 18.388 42.555 21.959 1.883.764 3.777 2.117 5.462 3.79-.968-3.903-1.483-7.669-1.237-11.088.964-13.403 9.031-13.405 18.079-10.915-46.333-18.664-43.664-65.153-43.664-65.153-3.121.158-5.655-2.37-5.568-5.433z" fill="#ffaa7b"/><path d="m245.864 210.189c-1.091-5.707-6.384-12.158-11.768-14.343-8.756-3.554-29.381-15.627-42.495-21.932-13.265-6.378-16.314-19.07-16.314-19.07-1.46-2.918-5.324-3.589-7.701-1.353l-11.5 10.815c-1.436 1.351-1.911 3.423-1.228 5.273 0 0 3.001 15.334 27.745 23.048 30.748 9.585 52.823 16.144 64.197 30.445.516.649 1.558.16 1.403-.654z" fill="#bbea49"/><g><path d="m423.316 273.015c-.389.025-.775.057-1.165.075-1.157.055-2.319.088-3.489.088h-.001c-11.228 0-21.87-2.551-31.385-7.093-1.697 3.069-3.474 5.688-5.292 7.506-9.902 9.903-35.638 26.244-43.869 51.274-.46 1.4-2.369 1.561-3.042.25-2.556-4.976-8.073-14.116-18.203-24.546-7.572 20.936-28.196 62.857-75.906 81.481 12.671 8.922 28.581 16.552 48.267 20.219 0 0 34.684 26.165 62.941 18.003 1.909-.552 3.909-.668 5.861-.292 3.458.666 9.426 1.082 14.114-2.413 4.925-3.671 6.27-8.903 6.624-11.921.202-1.723.75-3.374 1.659-4.852 7.057-11.473 36.193-62.041 44.842-127.92-.648.061-1.302.1-1.956.141z" fill="#f9ba8f"/><path d="m317.479 365.176-13.593-37.411c-11.944 19.783-31.593 42.058-62.922 54.287 12.671 8.922 28.581 16.552 48.267 20.219-6.269-30.176 28.248-37.095 28.248-37.095z" fill="#fcad6d"/></g><path d="m387.276 266.086c-1.697 3.069-3.474 5.688-5.292 7.506-9.902 9.903-35.638 26.244-43.869 51.274-.46 1.4-2.369 1.561-3.042.25-2.556-4.976-8.073-14.116-18.203-24.546-4.442 12.282-13.386 31.783-29.645 49.568 4.24 2.261 9.386 8.874 15.786 10.808 47.99 14.5 48.74 11.143 57.99 1.893s44.026-59.997 44.026-90.945c-6.23-1.181-12.185-3.15-17.751-5.808z" fill="#fcad6d"/><path d="m307.912 292.131c-7.273 20.537-28.035 63.852-77.669 81.46 3.5 3.087 7.315 6.124 11.492 9.016 48.673-18.326 68.829-61.524 75.744-81.427-2.809-2.93-5.988-5.968-9.567-9.049z" fill="#dae2fe"/><path d="m277.064 343.073c-11.617 12.224-26.886 23.446-46.821 30.518 3.5 3.087 7.315 6.124 11.492 9.016 20.013-7.535 35.196-19.277 46.629-31.874-4.712-2.39-8.348-4.955-11.3-7.66z" fill="#aab9f2"/><path d="m276.77 271.204c-3.355-1.758-5.954-4.681-7.239-8.243l-3.12-8.653c-1.232-3.416-2.698-6.752-4.536-9.883-10.651-18.15-30.72-30.106-53.496-29.157-30.738 1.281-55.61 26.488-56.507 57.24-.723 24.81 13.86 46.302 35.006 55.731 7.733 3.448 14.277 9.066 18.747 16.257 5.108 8.218 13.377 19.387 25.482 29.868 49.653-17.754 70.312-61.262 77.481-81.644-8.249-7.189-18.682-14.633-31.818-21.516z" fill="#4f71b6"/><path d="m230.243 294.788c-41.366-20.046-26.652-66.863-22.709-77.393.253-.676.305-1.395.18-2.085-30.43 1.615-54.952 26.667-55.842 57.196-.723 24.81 13.86 46.302 35.006 55.731 7.733 3.448 14.277 9.066 18.747 16.257 5.108 8.218 13.377 19.387 25.482 29.868 19.899-7.115 35.132-18.37 46.716-30.612-16.084-14.05-12.621-32.02-47.58-48.962z" fill="#3c58a0"/><ellipse cx="418.662" cy="202.078" fill="#6289cc" rx="64.054" ry="64.054" transform="matrix(.102 -.995 .995 .102 174.803 597.864)"/><path d="m455.443 254.504c-1.41-2.255-1.764-4.817-1.773-6.773-.008-1.715-1.345-3.14-3.054-3.287-21.265-1.836-19.297-21.376-18.346-26.744.16-.902-.062-1.822-.604-2.56l-21.581-29.398c-.556-.758-1.414-1.223-2.35-1.322-20.306-2.153-20.261-17.851-19.159-24.978.279-1.804-.973-3.474-2.77-3.794-3.263-.582-5.45-1.991-6.906-3.768-14.793 11.733-24.292 29.851-24.292 50.199 0 35.376 28.678 64.054 64.054 64.054 13.692-.001 26.37-4.311 36.781-11.629z" fill="#4f71b6"/><g><path d="m418.662 275.179c-40.308 0-73.101-32.793-73.101-73.101s32.793-73.101 73.101-73.101 73.101 32.793 73.101 73.101-32.793 73.101-73.101 73.101zm0-128.108c-30.33 0-55.007 24.676-55.007 55.007s24.676 55.007 55.007 55.007 55.007-24.676 55.007-55.007c-.001-30.331-24.677-55.007-55.007-55.007z" fill="#4f71b6"/></g><path d="m463.835 259.487c-.022-.004-.042-.014-.065-.017-8.671-1.383-10.081-7.794-10.099-11.739-.004-.949-.425-1.799-1.082-2.404-9.354 7.354-21.132 11.757-33.927 11.757-30.33 0-55.006-24.676-55.006-55.007 0-18.846 9.531-35.504 24.021-45.42-.487-.507-1.126-.878-1.869-1.011-8.315-1.482-9.69-8.309-9.606-13.018-18.53 13.274-30.64 34.967-30.64 59.449 0 40.308 32.793 73.101 73.101 73.101 17.041.001 32.727-5.877 45.172-15.691z" fill="#3c58a0"/><ellipse cx="418.662" cy="202.078" fill="#dae2fe" rx="19.912" ry="19.912" transform="matrix(.378 -.926 .926 .378 73.296 513.263)"/><path d="m11.001 267.001c0 70.31 29.628 133.688 77.069 178.364 7.794-21.506-1.293-55.337-14.83-103.033-26.059-91.815 24.688-162.604 47.318-208.128 13.537-27.231-4.334-45.535-20.882-55.85-54.171 44.941-88.675 112.762-88.675 188.647z" fill="#73c3f9"/><path d="m182.602 192.626c8.731 2.722 16.761 5.2 24.047 7.68-7.685-11.976 4.315-16.292 4.315-16.292-6.818-3.677-13.773-7.413-19.363-10.1-13.265-6.378-16.314-19.07-16.314-19.07-1.46-2.918-5.324-3.589-7.701-1.353l-11.5 10.815c-1.436 1.351-1.911 3.423-1.228 5.273 0-.001 3 15.333 27.744 23.047z" fill="#9fd332"/><path d="m337.074 35.753c.846 9.724.005 20.615-6.265 26.885-23.976 23.976-9.688 66.339 14.751 66.339 20.406 0 50.269-33.005 98.761-18.684-28.071-33.697-65.016-59.734-107.247-74.54z" fill="#73c3f9"/></g></svg></Link></Navbar.Brand>
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
