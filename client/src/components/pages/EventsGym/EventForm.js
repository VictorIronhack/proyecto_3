import React, { Component } from 'react'
import {Button, Form,} from 'react-bootstrap'
import EventService from './../../../services/event.service'
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
Geocode.setLanguage("en");
Geocode.setRegion("es");

export default class EventForm extends Component {
    constructor(props){
        super(props)
        
        this.state={
            name: this.props.data?.name || '',
            description:this.props.data?.description ||'',
            location: this.props.data?.location || {type: "Point", coordinates:[] },
            date: this.props.data?.date || Date,
            address:this.props.data?.address || '',
            maxParticipants:this.props.data?.maxParticipants || 0,
            image:this.props.data?.image || ''
       }
    this.eventService = new EventService()
    }

    
  localizeEvent = () => {
     return Geocode.fromAddress(this.state.address)
    .then((response) => {
       const { lat, lng } = response.results[0].geometry.location;
       this.setState({location: {type: "Point", coordinates: [lat,lng]}})
       console.log(lat, lng);
     },
     (error) => {
       console.error(error);
     }

   )}

    handleChange = (e) => {
        const {value, name} = e.target
        this.setState({
            ...this.state,
            [name] : value
        })
    }



    handleSubmit = async (e) => {
        e.preventDefault()
        await this.localizeEvent()
        
        const id = this.props.data._id
        
        const Submit = this.props.data ? this.eventService.updateOneEvent(id, this.state) : this.eventService.createEvent(this.state)  
        
        Submit
        .then(()=> {
            this.props.closeModal()
            this.props.refreshEvent()
            this.setState({
                name:'',
                description:'',
                location: {type: "Point", coordinates:[] },
                date: Date,
                address:'',
                maxParticipants:0,
                image:''    
            })
        })
        .catch(err => console.error(err))
    } 

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name: </Form.Label>
                <Form.Control onChange={(e) => this.handleChange(e)} name="name" value={this.state.name} type="text" placeholder="Name " />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripction: </Form.Label>
                 <Form.Control onChange={(e) => this.handleChange(e)} name="description" value={this.state.description} type="text" placeholder="Description" />
            </Form.Group>
            <label for="date">Date:</label>
            <input onChange={(e) => this.handleChange(e)} value={this.state.date} type="date" id="date" name="date"/>
            <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address: </Form.Label>
                 <Form.Control onChange={(e) => this.handleChange(e)} name="address" value={this.state.address}  type="text" placeholder="Address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="city">
                <Form.Label>City: </Form.Label>
                 <Form.Control onChange={(e) => this.handleChange(e)} name="city" value= {this.state.city} type="text" placeholder="City" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image: </Form.Label>
                <Form.Control onChange={(e) => this.handleChange(e)} name="image" value={this.state.image} type="text" placeholder="Event Image" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="participants">
                <Form.Label>Max Participants: </Form.Label>
                <Form.Control onChange={(e) => this.handleChange(e)} name="maxParticipants" value={this.state.maxParticipants} type="number" placeholder="Max Number of Participants" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        )
    }
}
