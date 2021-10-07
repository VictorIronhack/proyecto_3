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

  isFulled = () => {
    return this.props.participant.length === this.props.maxParticipants
  }

  beatifullDay = () => {
    return new Date(this.props.date).toLocaleDateString();
  }
  
  openModal = () => {
    this.setState({
      ...this.state,
      show:true
    })
  }

 
  deleteEvent = () => {
    this.eventService.deleteEvent(this.props._id)
      .then(res => this.props.refreshEvent())
      .catch(err => console.log(err))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    } 

  render () {
  return (
     
             <Col md={3} className="mb-3 d-flex align-items-stretch cardEvent centerB">
        <Card style={{ width: '18rem' }}>
          <Card.Img className='image' variant="top" src={this.props.image} alt={this.props.name} />
          <Card.Body className=''>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text className=''>
            <p>{this.props.address}- {this.props.city} - {this.beatifullDay()}</p> 
            <p className='centerD'>{this.props.description}</p>
            </Card.Text>
          </Card.Body>
            {this.props.loggedUser?.role === 'USER' &&
            <div>
            <Card.Body>
            {!this.isFulled() && (this.props.participant.includes(this.props.loggedUser?._id)
            ? <Button className='buttonEvent'  onClick={()=>this.offEvent()}>Get off Event</Button>
            : <Button className='buttonEvent' onClick={() =>this.joinEvent()}>Join Event</Button>
            )}
            </Card.Body>
            </div>}

            {this.props.loggedUser?.role === 'MAN' &&
            <div>
            <Button type='submit' onSubmit = {this.handleSubmit} block className="mt-2 buttonEvent" onClick={() => this.deleteEvent()}>Delete Event</Button>
            <Button block className="mt-2 buttonEvent" onClick={() => this.props.onEdit(this.props.event)}>Edit Event</Button>
            </div>}
            
        </Card>
      </Col>









  )}
}
