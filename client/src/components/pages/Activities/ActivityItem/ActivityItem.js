import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import ActivityService from '../../../../services/activity.service'
import './ActivityItem.css'
import 'react-slideshow-image/dist/styles.css'




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
    this.activityService.pullUserActivity(this.props._id)
      .then(res => {
        console.log("llamando a refresh")
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
        {this.props.loggedUser?.role === 'USER' &&
          <div>
            {!this.isFullActivity() && (this.props.participant.includes(this.props.loggedUser?._id)
              ? <Button className='act' onClick={() => this.offActivity()}>Get off Activity</Button>
              : <Button className='act' onClick={() => this.joinActivity()}>Join Activity</Button>
            )}
          </div>
        }
      </div>
    )
  }
}
