
import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ActivtyItem({ _id, name, image, description }) {
  return (
    <Col md={4} className="mb-3">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>{description}</p>

          <Link to={`/activities/${_id}`}>
           <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}
  

 