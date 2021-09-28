import axios from 'axios';

class ActivityService {

  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/IronGym`
    })
  }

  getActivity = () => this.instance.get("/");
  getOneActivity = (id) => this.instance.get(`/${id}`);
  createActivity = (activity) => this.instance.post("/", activity);

}

export default ActivityService;