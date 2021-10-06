import React, { Component } from "react";
import './CartItem.css'
import { Button, Col } from 'react-bootstrap'
import CartService from "../../../services/cart.service";


class CartItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: null,
      quantity: 1
    }
    this.cartService = new CartService()
  }


  pullOffCart = (id) => {
    this.cartService.pullProduct(id)
      .then(res => {
        this.props.refreshCartItems()
      })
      .catch(err => console.error(err))
  }

  counterSum = () => {
    this.setState({
      ...this.state,
      quantity: this.state.quantity + 1
    })
  }
  counterRest = () => {
    if (this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1
      })
    }
  }



  render() {
    return (

      this.props.products.map((e, idx) => {

        return (

          <Col md={3} className="mb-3 d-flex align-items-stretch search3">
            <div>
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
              <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />

              <div className="shopping-cart">
                <div id="controls">
                  <i className="fas fa-shopping-cart shopping-cart-icon"></i>
                  <br />
                  <br />
                  <p>{e.name}</p>
 
                </div>
                <div key={e._id + idx} className="box">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img width='200px' src={e.image} alt={e.name} />
                    </figure>
                  </div>
                  <p>{e.price}€</p>
                  <br/>
                 
                </div>
                <Button onClick={() => this.pullOffCart(e._id)} className="button is-info">
                  Delete
                </Button>
 
                <Button onClick={()=>this.counterSum()} className="buttonSum">+</Button>
                <Button onClick={()=>this.counterRest()} className="buttonSum">-</Button>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>
          </Col>


)
})
);
}
}

export default CartItem;

{/* <input className="input" onClick={() => this.counter()} type="number" value={this.state.quantity} /> */}






