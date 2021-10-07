import React, { Component } from 'react'
import {Button, Form,} from 'react-bootstrap'
import ActivityService from '../../../../services/activity.service'
import UploadsService from '../../../../services/uploads.service'



export default class ActivityForm extends Component {
    constructor(props){
        super(props)

        this.state={
            name:this.props.data?.activity.name || '',
            description:this.props.data?.activity.description ||'',
            instructor:this.props.data?.activity.instructor ||'',
            date:this.props.data?.activity.date ||Date,
            hourStart:this.props.data?.activity.hourStart ||'',
            hourEnd:this.props.data?.activity.hourEnd ||'',
            image:this.props.data?.activity.image ||''
        }
        this.activityService = new ActivityService()
    }
    uploadService = new UploadsService()
    // state={
    //     name:'',
    //     description:'',
    //     instructor:'',
    //     date:'',
    //     hourStart:'',
    //     hourEnd:'',
    //     image:'',
    //     video: ''
    // }
    // activityService = new ActivityService()

    handleChange = (e) => {
        const {value, name} = e.target
        this.setState({
            ...this.state,
            [name] : value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const id = this.props.data?.activity._id

        const Submit = this.props.data ? this.activityService.updateOneActivity(id, this.state) : this.activityService.createActivity(this.state)  

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
                image:'',
                video: ''
            })
        })
        .catch(err => console.error(err))
    } 

    handleFile = (e) => {
        this.setState({
          ...this.state,
          isLoading: true
        })
    
        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])
    
        this.uploadService.uploadImg(uploadData)
          .then(res => {
            this.setState({
              ...this.state,
              isLoading: false,
              image: res.data.cloudinary_url,
            })
          })
          .catch(err => alert("Error"))
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
                 <Form.Control onChange={(e) => this.handleChange(e)} name="description" maxLength={400} value={this.state.description} type="text" placeholder="Description" />
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
            <Form.Group className="mb-3" controlId="video">
                <Form.Label>Video: </Form.Label>
                <Form.Control onChange={(e) => this.handleChange(e)} name="video" value={this.state.video} type="text" placeholder="Introduce url video" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Imagen: </Form.Label>
                <Form.Control onChange={(e) => this.handleFile(e)} name="image" type="file" />
            </Form.Group>

            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        )
    }
}
