import React, { Component } from 'react'
import BackgroundVideoHome from '../BackgroundVideo/BackgroundVideo'
import Map from '../Maps/maps'
import { Link} from 'react-router-dom';
import './HomePage.css'
import {Card} from 'react-bootstrap'

export default class HomePage extends Component {
  render(){
    return (
      <>
      
      <BackgroundVideoHome url={'https://player.vimeo.com/external/368745224.sd.mp4?s=81503c465f1569f299737112729c7c5f3b6373d6&profile_id=139&oauth2_token_id=57447761'}/>

      <div className='video-overlay'>
        <section className='back-sec sec-1' >
        <h1>IronGym</h1>
        <br />
        <p><strong>IronGym</strong> arises to cover the need that students have at <strong>Ironhack</strong>, to disconnect from the screens, and especially from the chairs, in which they spend a large number of hours a day.</p>
        <p>Both, for their mental and physical health, this project was born that not only seeks to take care of our people, but also seeks to stimulate their wonderful minds through physical exercise. Our boys, girls, and faculty, will no longer have excuses for not leading a healthy life. Our schedules are adapted to their needs, and the proximity to our campus, where they spend or have gone through moments of stress and tension, will facilitate the ability to escape to relieve the stress of the moment or the day.</p>
        <p>We all know what a <em>bootcamp</em> is and how difficult it can be to find time to disconnect. But we also know how important it is to exercise, go out with our colleagues to have a good time, release the stress of the day by exercising, perhaps running, perhaps hitting a punching bag.</p>
        <p>Our service for students is completely free. As for <em>alumni</em>, and staff, they have a significant discount. Our partners and their employees also enjoy discounts, with whom we count on to help and nurture professional relationships with <em>alumni</em> and current students.</p>
        <p>Hopefully both, locals and strangers, will find what we all seek in <strong>Ironhack & IronGym</strong>, a lifechanging experience that remains etched in our minds for the rest of our lives.</p>
        <br />
        </section>
        <section className='back-sec sec-2'>
          <div className='column'>
            <div className='row justify-content-md-center'>
              <div className='col'>
                <Card style={{ width: '25rem' }}>
                  <Card.Img className='cardimg' variant='top' src='https://thumbs.dreamstime.com/z/beautiful-young-sporty-sexy-couple-workout-gym-showing-muscle-61099214.jpg' />
                  <Card.Body>
                    <Card.Title>Activities</Card.Title>
                    <Card.Text>
                    Join any of our greats activities to reset your mind. Every one of them are planed to make you feel you are somewhere else. Leave your stress behind with the help of our instructors. You wont reget it.
                    </Card.Text>
                    <Link to='/activities' className='btn btn-primary'>Activities</Link>
                  </Card.Body>
                </Card>
              </div>
              <div className='col'>
                <Card style={{ width: '25rem' }}>
                  <Card.Img className='cardimg' variant='top' src='https://www.datocms-assets.com/14946/1580815725-madrid-1.jpg?auto=compress&dpr=1&fm=jpg&w=1000' />
                  <Card.Body>
                    <Card.Title>IronHack</Card.Title>
                    <Card.Text>
                    Immersive Web Development, UX/UI Design, Data Analytics, and Cybersecurity courses. Formats tailored to your needs: remote or on campus, full-time or part-time. A lifechanging oportunity.
                    </Card.Text>
                    <a href='https://www.ironhack.com/en/madrid' className='btn btn-primary'>Ironhack</a>
                  </Card.Body>
                </Card>
              </div>
              <div className='col'>
                <Card style={{ width: '25rem'}}>
                  <Card.Img className='cardimg' variant='top' src='https://i1.wp.com/unserenotransitandolaciudad.com/wp-content/uploads/2017/05/Deporte-parque-del-retiro.jpg?ssl=1' />
                  <Card.Body>
                    <Card.Title>Events</Card.Title>
                    <Card.Text>
                    One of the most important things in life, is to enjoy nature. But is better if it is with your co-workers, your colleagues, and even with your boss. Join our events and meet new people. Take away your laptop and get some fun.
                    </Card.Text>
                    <Link to='/events' className='btn btn-primary'>Events</Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section>
        <Map />
        </section>
      </div>
    </>
    )
  }
}
