import React, { Component } from 'react'
import { Button, Modal, Spinner } from 'react-bootstrap'
import Map from '../Maps/maps'
import EventService from './../../../services/event.service'
import EventForm from './EventForm'
import EventItem from './EventItem'
import './Event.css'







export default class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: null,
      show: false,
      data: undefined
    }
    this.eventService = new EventService()
  }

  refreshEvent = () => {
    this.eventService.getEvents()
      .then(res => {
        this.setState({
          ...this.state,
          events: res.data
        })
      })
      .catch(err => console.error(err))
  }

  openModal = () => {
    this.setState({
      ...this.state,
      show:true
    })
  }

  closeModal = () => {
    this.setState({
      ...this.state,
      show:false,
      data: undefined
    })
  }

  componentDidMount() {
    this.refreshEvent();
  }

  onEdit  = (data)=> {
    this.setState({data}, ()=> {
      this.openModal()
    })
  }

  render(){
    return (
      !this.state.events
      ?
      <Spinner animation="border" variant="primary" />
      :
      <>
      <section>
      
        <div className='column centerOne'>
          <div className='row justify-content-md-center'>
          {this.state.events.map(events => <EventItem key={events._id} loggedUser= {this.props.loggedUser} refreshEvent={this.refreshEvent} onEdit={this.onEdit}  {...events}/>)}   
          </div>
        </div>
        <Button block className="mt-2" onClick={() => this.openModal()}>New Event</Button>
        <Modal show={this.state.show} onHide={() => this.closeModal()}>
          <Modal.Header closeButton>
            <Modal.Title className='centerB'>New Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EventForm data={this.state.data} closeModal={() => this.closeModal()}  refreshEvent={this.refreshEvent} />
          </Modal.Body>
        </Modal>
      </section>
      <article>
        <Map location={this.props.location} markers={this.state.events} />
      </article>
      </>
   
    )
  }
}

