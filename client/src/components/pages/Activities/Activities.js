import React, { Component } from 'react'
import { Button, Modal, Spinner } from 'react-bootstrap'
import ActivityService from '../../../services/activity.service'
import ActivityForm from './ActivityForm/ActivityForm'
import ActivityItem from './ActivityItem/ActivityItem'
import Calendar from './../Calendar/Calendar'
import { Fade } from 'react-slideshow-image';
import './Activities.css'



export default class Activities extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activities: null,
      show: false,
    }

    this.activityService = new ActivityService()
  }

  refreshActivity = () => {
    this.activityService.getActivities()
      .then(res => {
        this.setState({
          ...this.state,
          activities: res.data

        })
      })
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.refreshActivity();

  }

  openModal = () => {
    this.setState({
      ...this.state,
      show: true
    })
  }

  closeModal = () => {
    this.setState({
      ...this.state,
      show: false
    })
  }

  deleteAct = () => {
    this.activityService.deleteActivity(this.props._id)
  }

  render() {
    return (
      !this.state.activities
        ?
        <Spinner animation="border" variant="primary" />
        :
        <section>
          <div className='column centerOne'>
            <div className='row justify-content-md-center'>
              {this.state.activities.map(activities => <ActivityItem key={activities._id} {...activities} refreshActivity={this.refreshActivity} loggedUser={this.props.loggedUser} />)}
            </div>
            <div className="slide-container">
              <Fade>
              {this.state.activities.map(activities =>
                <div className="each-fade"><img src={activities.image} alt=''/>
                  <p>{activities.name}-{activities.description}</p>
                </div>
              )}
              </Fade>
            </div>
          </div>
          {this.props.loggedUser?.role === 'MAN' &&
            <div>
              <Button block className="mt-2" onClick={() => this.openModal()}>New Activity</Button>
              <Modal show={this.state.show} onHide={() => this.closeModal()}>
                <Modal.Header closeButton>
                  <Modal.Title>New Activity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ActivityForm closeModal={() => this.closeModal()} refreshActivity={this.refreshActivity} />
                </Modal.Body>
              </Modal>
            </div>}
          <br />
          <br />
          <br />
          <section>
            <Calendar />
          </section>
        </section>
    )
  }
}

