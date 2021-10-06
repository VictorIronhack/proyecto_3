import React, { Component } from 'react'
import {Button, Form,} from 'react-bootstrap'
import ShopService from '../../../services/shop.service'
import UploadsService from '../../../services/uploads.service'


export default class ShopForm extends Component {

    state={
        name:'',
        description:'',
        price: 0,
        image:''
    }
    shopService = new ShopService()
    uploadService = new UploadsService()

    handleChange = (e) => {
        const {value, name} = e.target
        this.setState({
            ...this.state,
            [name] : value
        })
        console.log(this.state.price)
    }

    handleSubmit = (e) => {
        
        e.preventDefault()
        this.shopService.createShopItem(this.state)
        .then(()=> {
            this.props.closeModal()
            this.props.refreshShopItems()
            this.setState({
                name:'',
                description:'',
                price: 0,
                image:''
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
              image: res.data.cloudinary_url
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
                 <Form.Control onChange={(e) => this.handleChange(e)} name="description" value={this.state.description} type="text" placeholder="Description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price: </Form.Label>
                 <Form.Control onChange={(e) => this.handleChange(e)} name="price" value={this.state.price} type="number" placeholder="Price" />
                 
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
