import React, { Component } from 'react'
import { Button, Col, Card} from 'react-bootstrap'
import CartService from '../../../services/cart.service'
import './ShopList.css'

export default class ShopItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      image: '',
      price: 0,
      description: ''
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



  render() {
    return (
      <Col md={4} className="mb-3 d-flex align-items-stretch search3">
        <div>
          <figure className="snip1278">
            <div className="image">
              <img src={this.props.image} alt="sq-sample6" />
            </div>
            {this.props.name}
            <figcaption>
              <p>
                {this.props.description}
              </p>
              <hr/>
              <div className="price">
                {this.props.price}€
              </div>
            </figcaption>
            <Card.Body>
              <Button className='buttonBackground' onClick={() => this.sendToCart()}>Add to Cart</Button>
            </Card.Body>
          </figure>
        </div>
      </Col>
    )
  }
}
