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
      description: '',
      isBuying: false
    }
    this.cartService = new CartService()

  }



isInCart = (productId) => {
  if (this.props.cart.products.find((elm) => {
    
    console.log(elm._id, productId)

    return elm._id === productId})) {
    return true
  }//true o false si el id está ya en el carro
}

sendToCart = () => {
    if(this.state.isBuying) return

    this.setState({isBuying: true}, ()=> {

      if(this.isInCart(this.props._id)) {
        console.log("producto ya en el carro")
        return 
      }
      
      this.cartService.pushProduct(this.props._id)
        .then(res => {
          this.props.refreshCart()
          this.setState({
            ...this.state,
            products: res.data,
            isBuying: false
          })
        })
        .catch(err => console.error(err))
    
      })
  
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
            {this.props.loggedUser?.role === 'USER' &&
              <Button className='buttonBackground' onClick={() => this.sendToCart()}>Add to Cart</Button>
            }
            </Card.Body>
          </figure>
        </div>
      </Col>
    )
  }
}
