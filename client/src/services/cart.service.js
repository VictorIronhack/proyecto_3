import axios from 'axios';

class CartService {
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/cart`,
      withCredentials: true
    })
  }

  getCarts = () => this.instance.get("/");
  pushProduct = (productId) => this.instance.put("/push", {productId})
  pullProduct = (productId) => this.instance.put("/pull", {productId})
  pullAllProduct = (productId) => this.instance.put("/pullAll", {productId})
}

export default CartService;