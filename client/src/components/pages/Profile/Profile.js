import { Col, Container, Image} from "react-bootstrap"

const Profile = ({ loggedUser }) => {

  return (
    <Container>
      <Col xs={6} md={6}>
      <Image src={loggedUser.image} width='300x350' height='300x350' roundedCircle />
      </Col>
     
      <div className='column'>
        <div className='row'>
          <div className='col-6'>
            <h1>¡Bienvenid@ a IronGym,!   -   {loggedUser.username}</h1>
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