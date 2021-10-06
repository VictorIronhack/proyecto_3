import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ActivityService from '../../../../services/activity.service'
import './ActivityItem.css'
export default class ActivityItem extends Component {
  constructor(props){
         super(props)
         this.activityService = new ActivityService()
       }

       
  render() {
    return (
      <div>
             <Link to={`/activity-detail/${this.props._id}`}  className='col-3'>
           <div className='col-3 art'>
            <img src={this.props.image} alt={this.props.name} width='200px' />
             <br/>
             <br/>
             <br/>
             <h3>{this.props.name}</h3>
             <br/>
             <h5>{this.props.instructor}</h5>
           </div>
        </Link>
      </div>
    )
  }
}