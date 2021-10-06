import React, { Component } from "react";
import './CartItem.css'
import CartQuantity from "./CartQuantity";
import CartService from "../../../services/cart.service";


class CartItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
          products: null
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

      
    render() {
        return (
            
            this.props.products.map((e, idx) => {
                
                return(

            <div key={e._id + idx} className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={e.image} alt={e.name}/>
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{e.name}</strong> <br />
                            <small>{e.description}</small> <br/>
                            <strong><small>{e.price} €</small></strong>
                        </p>
                    </div>
                </div>
                    <CartQuantity />
                    <button onClick={()=>this.pullOffCart(e._id)} className="button is-info">
                               Delete
                            </button>
            </article>
        </div>
                )
            })
        );
    }
}

export default CartItem;