import { Container } from "react-bootstrap"

const Profile = ({ loggedUser }) => {

  return (
    <Container>
      <div className='column'>
        <div className='row'>
          <div className='col-6'>
            <h1>¡Bienvenid@ a IronGym,!   -   {loggedUser.username}</h1>
            <img src={loggedUser.image} alt={loggedUser.username} width='200px' />
            <p>{loggedUser.email}</p>

            <h3>Purchase history:</h3>
            <p>{loggedUser.historyBuy}</p>
          </div>
        </div>

      </div>
    </Container>
  )
}

export default Profile