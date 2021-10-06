import React, { Component } from 'react'
import ActivitiesService from './../../../../services/activity.service'
import {Button, Col, Container, Modal, Row, Spinner} from 'react-bootstrap'
import ActivityForm from '../ActivityForm/ActivityForm'

export default class ActivityDetail extends Component {

constructor(props){
    super(props)

    this.state={
        activities:null,
        show: false,
    }
    this.activitiesService = new ActivitiesService()
}

componentDidMount() {

   this.refreshActivity()
}

refreshActivity() {
  const{id} = this.props.match.params
  this.activitiesService.getOneActivity(id)
      .then( res => {
          this.setState({
              ...this.state,
              activities: res.data
      })
  })
.catch(err => console.error(err))
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

   

    render() {
        return (
            <Container>
            {this.state.activities ?
                <Row>
                    <Col md={6}>
                        <h1>Activity Name: {this.state.activities.activity.name}</h1>
                        <h3>Description: {this.state.activities.activity.description}</h3>
                        <hr />
                        <p>Instructor: {this.state.activities.activity.instructor}</p>
                    </Col>
                <Col md={4}>
              <img src={this.state.activities.activity.image} alt={this.state.activities.activity.name} />
            </Col>
          </Row>
          :
          <Spinner />
        }
        <Button block className="mt-2" onClick={() => this.openModal()}>Edit Activity</Button>
          <Modal show={this.state.show} onHide={() => this.closeModal()}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Activity</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ActivityForm refreshActivity={() => this.refreshActivity()} closeModal={() => this.closeModal()} data={this.state.activities}  />
            </Modal.Body>
          </Modal>
       
      </Container>
        )
    }
}
