import React, { Component } from 'react'
import {Button, Form,} from 'react-bootstrap'
import ActivityService from '../../../../services/activity.service'


export default class ActivityForm extends Component {
    constructor(props){
        super(props)

        this.state={
            name:this.props.data.activity?.name || '',
            description:this.props.data.activity?.description ||'',
            instructor:this.props.data.activity?.instructor ||'',
            date:this.props.data.activity?.date ||Date,
            hourStart:this.props.data.activity?.hourStart ||'',
            hourEnd:this.props.data.activity?.hourEnd ||'',
            image:this.props.data.activity?.image ||''
        }
        this.activityService = new ActivityService()
    }

    handleChange = (e) => {
        const {value, name} = e.target
        this.setState({
            ...this.state,
            [name] : value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const id = this.props.data.activity._id

        const Submit = this.props.data.activity ? this.activityService.updateOneActivity(id, this.state) : this.activityService.createActivity(this.state)  

        Submit
        .then(()=> {
            this.props.closeModal()
            this.props.refreshActivity()
            this.setState({
                name:'',
                description:'',
                instructor:'',
                date:'',
                hourStart:'',
                hourEnd:'',
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
            <Form.Group className="mb-3" controlId="instructor">
                <Form.Label>Instructor: </Form.Label>
                 <Form.Control onChange={(e) => this.handleChange(e)} name="instructor" value={this.state.instructor} type="text" placeholder="Instructor" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="instructor">
                <Form.Label>Date: </Form.Label>
                 <Form.Control onChange={(e) => this.handleChange(e)} type="date" name='date'  placeholder="Instructor" />
            </Form.Group>            
            <Form.Group className="mb-3" controlId="hourStart">
                <Form.Label>Hour Start: </Form.Label>
                <Form.Control onChange={(e) => this.handleChange(e)} type="time" name='hourStart' value={this.state.hourStart} min='08:00' max='22:00' placeholder="Introduce hour" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="hourEnd">
                <Form.Label>Hour End: </Form.Label>
                <Form.Control onChange={(e) => this.handleChange(e)} type="time" name='hourEnd' min='08:00' value={this.state.hourEnd} max='22:00' placeholder="Introduce hour" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Imagen: </Form.Label>
                <Form.Control onChange={(e) => this.handleChange(e)} name="image" value={this.state.image} type="text" placeholder="Introduce imagen" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        )
    }
}
