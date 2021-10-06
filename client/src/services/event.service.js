import axios from 'axios';

class EventService {
  constructor(){
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/events`,
      withCredentials: true
    })
  }

  getEvents = () => this.instance.get("/");
  getOneEvent = (id) => this.instance.get(`/${id}`);
  createEvent = (event) => this.instance.post("/", event);
  pushUser = (eventId) => this.instance.put("/push", {eventId}) 
  pullUser = (eventId) => this.instance.put("/pull", {eventId})
  updateOneEvent = (id, event) =>  this.instance.put(`/${id}`, event)
  
}

export default EventService;