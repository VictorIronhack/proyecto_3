import React, { Component } from 'react'
import ActivitiesService from './../../../../services/activity.service'
import {Button, Col, Container, Modal, Row, Spinner} from 'react-bootstrap'
import ActivityForm from '../ActivityForm/ActivityForm'
import BackgroundVideos from '../../BackgroundVideo/BackgroundVideo'
import './ActivityDetail.css'
import StarRate from '../StarRate'

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
   console.log(this.state)
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

   
    // const{id} = this.props.match.params
    // this.activitiesService.getOneActivity(id)
    //     .then( res => {
    //         this.setState({
    //             ...this.state,
    //             activities: res.data
    //     })
    // })
// .catch(err => console.error(err))
// }

deleteAct = () => {
    this.activitiesService.deleteActivity(this.state.activities.activity._id)
    .then(res => {
        this.props.history.push('/activities')

    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    } 

    render() {
        return (
            <>
            {this.state.activities &&
            <>
            <BackgroundVideos url= {this.state.activities.activity.video}/>
            </>
            }
            <Container className='transparentwhite'>
            {this.state.activities ?
                <Row>
                    <Col >
                        <h1>{this.state.activities.activity.name}</h1>
                        <p>{this.state.activities.activity.description}</p>
                        <hr />
                        <h3 className='inst'>Instructor: {this.state.activities.activity.instructor}</h3>
                    </Col>
                  <StarRate/>

                </Row>
                :
                <Spinner />
             }
              <Modal show={this.state.show} onHide={() => this.closeModal()}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Activity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ActivityForm refreshActivity={() => this.refreshActivity()} closeModal={() => this.closeModal()} data={this.state.activities}  />
                </Modal.Body>
              </Modal>
              <div className='btns'>
              <Button type='submit' onSubmit = {this.handleSubmit} block className="mt-2 deletebt" onClick={() => this.deleteAct()}>Delet Activity</Button>
              <Button block className="mt-2 editbt" onClick={() => this.openModal()}>Edit Activity</Button>
              </div>
            </Container>
            </>
        )
    }
}
