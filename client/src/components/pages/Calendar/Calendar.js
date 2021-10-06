import React, { Component } from "react"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './Calendar.css'
import ActivityService from './../../../services/activity.service'

require("moment/locale/es.js")
const localizer = momentLocalizer(moment)

class EventsCalendar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activities: null,
      show: false,
    }
    this.activityService = new ActivityService()
  }

  calcActivityDate = (date, hour) => {
    const hourStart = Number(hour?.substr(0, 2) )
    const minutesStart = Number(hour?.substr(3))
    
    return  moment(date).hours(hourStart).minutes(minutesStart).toDate()
  }

  componentDidMount = () => {
    this.activityService.getActivities()
    .then(res => {

      this.setState({activities: res.data.map(el => {
        const start = this.calcActivityDate(el.date, el.hourStart)
        const end = this.calcActivityDate(el.date, el.hourEnd)
        
        return {
          'title': el.name,
          'allDay': el.allDay,
          'start': start,
          'end': end,
          'bgColor': '#2DC5FA'
        }
      })})
    })
    .catch(err => console.log(err))
  }
  

   eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = event.bgColor;
    const style = {
      backgroundColor
    };
    return {
      style
    };
  };

  render() {
    return (
      <>
      <div className='calendar'>

      {this.state.activities ?
      <div style={{ height: `${600}px` }} className="bigCalendar-container">
      
        <Calendar
          localizer={localizer}
          eventPropGetter={this.eventStyleGetter}
          events={this.state.activities}
          step={60}
          view='week'
          views={['week']}
          min={new Date(2021, 9, 1, 6, 0)}
          max={new Date(2021, 9, 1, 23, 0)}
          date={new Date(2021, 9, 4)}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
      :
      <p>...loading</p>
}
      </div>
      </>
    )
  }
}

export default EventsCalendar



