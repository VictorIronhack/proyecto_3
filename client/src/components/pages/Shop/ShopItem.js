import React, { Component } from 'react'
import { Button, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import CartService from '../../../services/cart.service'
import './ShopList.css'

export default class ShopItem extends Component {
constructor(props) {
  super(props)

  this.state = {
    name:'',
    image:'',
    price: 0,
    description:''
  }
  this.cartService = new CartService()
}

componentDidMount() {
  this.getCart()
    .then(cart => this.setState({cart}))
}

getCart = () => {
  return this.cartService.getCarts()
  .then(res => res.data[0])
  .catch(err => console.log(err))    
}

isInCart = (cart, productId) => {
  console.log(cart, productId)
  if (cart.find((elm) => elm._id === productId)) {
  return true
  }//true o false si el id está ya en el carro
}

sendToCart = () => {
  
    if(this.isInCart(this.state.cart.products, this.props._id)) {
      console.log("producto ya en el carro")
      return 
    }
    
    this.cartService.pushProduct(this.props._id)
      .then(res => {
        this.setState({
          ...this.state,
          products: res.data
        })
      })
      .catch(err => console.error(err))
  
}


  
render () {
  return (
      
      <Col md={3} className="mb-3 d-flex align-items-stretch">
        <Card style={{ width: '18rem' }}>
          <Card.Img className='image' variant="top" src={this.props.image} alt={this.props.name} />
          <Card.Body className='image'>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
          <p className='image'>

          {this.props.description}
          </p>
          <br/>
            <ListGroup className="list-group-flush">
              <ListGroupItem><strong>Price: {this.props.price} €</strong></ListGroupItem>
            </ListGroup> 
            <Card.Body>
              <Button onClick={()=>this.sendToCart()}variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
      </Col>
  )
}
}
