import React, { Component, Form, Button } from 'react'



export default class ActivitiesForm extends Component {

  


  render() {
    return (
      <div>
        
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Name: </Form.Label>
          <Form.Control onChange={(e) => this.handleChange(e)} name="name" value={this.state.name} type="text" placeholder="Name activity" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Descripción: </Form.Label>
          <Form.Control onChange={(e) => this.handleChange(e)} name="description" value={this.state.description} type="text" placeholder='Description' />
        </Form.Group>

        <Form.Group className='mb-3' controlId="professor">
          <Form.Label>Professor: </Form.Label>
          <Form.Control onChange={(e) => this.handleChange(e)} name="professor" value={this.state.professor} type="number" placeholder="Professor activity" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="date">
          <Form.Label>Date: </Form.Label>
          <Form.Control onChange={(e) => this.handleChange(e)} name="date" value={this.state.date} type="number" placeholder="Date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="hour">
          <Form.Label>Hour: </Form.Label>
          <Form.Control onChange={(e) => this.handleChange(e)} name="hour" value={this.state.hour} type="text" placeholder="Hour" />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    
      </div>
    )
  }
}
