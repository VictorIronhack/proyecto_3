import React, { Component } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import CartService from '../../../services/cart.service'
import CartItem from './CartItem'




export default class CartList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: null,
    }
    this.cartService = new CartService()
  }


  refreshCartItems = () => {
    this.cartService.getCarts()
      .then(res => {
        this.setState({
          ...this.state,
          products: res.data
        })
      })
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.refreshCartItems();
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState( {
      ...this.state,
      [name]:value
    })
  }

  handleBuy = () => {
    this.cartService.pullAllProduct()
      .then(res => {
          this.refreshCartItems()
      })
      .catch(err => console.error(err))
  }

  render(){
    return (

      <section>

        <h1>Your Shopping List</h1>
        {!this.state.products
      ?
      <Spinner animation="border" variant="primary" />
      :
        <div className='column centerOne'>
          <div className='row justify-content-md-center'>
          {this.state.products.map(products => <CartItem key={products._id} {...products} refreshCartItems={() => this.refreshCartItems()}/>)} 
          </div>
        </div>}
        <Button onClick={()=> {this.handleBuy()}}  block className="mt-2">Buy Now!!</Button>
      </section>
    )
  }
}
