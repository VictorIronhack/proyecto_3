import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import ActivityService from '../../../../services/activity.service'
import './ActivityItem.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';




export default class ActivityItem extends Component {

  constructor(props) {
    super(props)
    this.activityService = new ActivityService()
  }


  joinActivity = () => {
    this.activityService.pushUserActivity(this.props._id)
      .then(res => {
        this.props.refreshActivity()
      })
      .catch(err => console.error(err))
  }

  offActivity = () => {
    this.activityService.pullUserActiviy(this.props._id)
      .then(res => {
        this.props.refreshActivity()
      })
      .catch(err => console.error(err))
  }

  isFullActivity = () => {
    return this.props.participant.length === this.props.maxParticipants
  }

  render() {
    return (
      <div>
          
      
        {/* <Link to={`/activity-detail/${this.props._id}`} className='col-3'>

          <div className='col-3 art'>
            <img src={this.props.image} alt={this.props.name} width='200px' />
            <br />
            <br />
            <br />
            <h3>{this.props.name}</h3>
            <br />
            <h5>{this.props.instructor}</h5>
          </div>
        </Link> */}
        {this.props.loggedUser?.role === 'USER' &&
          <div>
            {!this.isFullActivity() && (this.props.participant.includes(this.props.loggedUser?._id)
              ? <Button onClick={() => this.offActivity()}>Get off Activity</Button>
              : <Button onClick={() => this.joinActivity()}>Join Activity</Button>
            )}
          </div>
        }
      </div>
    )
  }
}
