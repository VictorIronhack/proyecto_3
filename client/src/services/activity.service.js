import axios from 'axios';

class ActivityService {

  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/activities`,
      withCredentials: true
    })
  }

  getActivities = () => this.instance.get("/");
  getOneActivity = (id) => this.instance.get(`/${id}`);
  createActivity = (activity) => this.instance.post("/", activity);
  pushUserActivity = (activityId) => this.instance.put("/push", {activityId}) 
  pullUserActivity = (activityId) => this.instance.put("/pull", {activityId})
  updateOneActivity = (id, activity) => this.instance.put(`/${id}`, activity)
  }

export default ActivityService;