import React, { Component } from 'react'

export default class CartQuantity extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quantity: 1 
               
    }
}


counterSum = () => {
    this.setState({
        ...this.state,
        quantity: this.state.quantity + 1
    })
}
counterRest = () => {
  if(this.state.quantity > 0){
    this.setState({
      quantity: this.state.quantity - 1
    })
  }
}


  render() {
    return (
      
         <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" onClick={() => this.counter()} type="number" value={this.state.quantity} />
                        </div>
                        <div className="control">
                        
                            <button onClick={()=>this.counterSum()} className="">
                                +
                                
                            </button>
                            <button onClick={()=>this.counterRest()} className="">
                                -
                            </button>
                        </div>
                    </div>
                </div>
     
    )
  }
}
