import axios from 'axios';

class ProfileService {

  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/users`
    })
  }

  getProfile = () => this.instance.get("/");
  getOneProfile = (id) => this.instance.get(`/${id}`);
  createProfile = (profile) => this.instance.post("/", profile);
}

export default ProfileService;