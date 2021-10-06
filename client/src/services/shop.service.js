import axios from 'axios';

class ShopService {
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/shop`
    })
  }

  getShopItems = () => this.instance.get("/");
  getOneShopItem = (id) => this.instance.get(`/${id}`);
  createShopItem = (shopItem) => this.instance.post("/", shopItem);

}

export default ShopService;