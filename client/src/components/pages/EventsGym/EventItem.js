import React, { Component } from 'react'
import { Button, Card, Col} from 'react-bootstrap'
import EventService from './../../../services/event.service'
import './Event.css'

export default class EventItem extends Component { 
  constructor(props) {
    super(props)
    this.eventService = new EventService()
  }

  joinEvent = () => {
    this.eventService.pushUser(this.props._id)
      .then(res => {
        this.props.refreshEvent()
      })
      .catch(err => console.error(err))
  }

  offEvent = () => {
    this.eventService.pullUser(this.props._id)
      .then(res => {
        this.props.refreshEvent()
      })
      .catch(err => console.error(err))
  }

  isFull = () => {
    return this.props.participant.length === this.props.maxParticipants
  }
  beatifullDay = () => {
    return new Date(this.props.date).toLocaleDateString();
  }

 

  render () {
  return (
     
             <Col md={3} className="mb-3 d-flex align-items-stretch">
              <Card style={{ width: '18rem' }}>
                <Card.Img className='image' variant="top" src={this.props.image} alt={this.props.name} />
                <Card.Body className=''>
                  <Card.Title>{this.props.name}</Card.Title>
                  <Card.Text className=''>
                  <p>{this.props.address}- {this.props.city} - {this.beatifullDay()}</p> 
                  <p className='centerD'>{this.props.description}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Button onClick={() =>this.props.onEdit({...this.props})} >Edit Event</Button>
                  {!this.isFull() && (this.props.participant.includes(this.props.loggedUser?._id)
                  ? <Button onClick={()=>this.offEvent()}>Get off Event</Button>
                  : <Button onClick={() =>this.joinEvent()}>Join Event</Button>
                  )}

                </Card.Body>
              </Card>
             </Col>
  )}
}
