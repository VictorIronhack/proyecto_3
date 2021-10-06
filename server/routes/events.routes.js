const express = require("express");
const Event = require('./../models/Event.model');
const router = express.Router();

router.get("/", (req, res) => {
  Event
    .find()
    .select('name date image address city description participant maxParticipants location')
    .then(events => res.status(200).json(events))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving events", err }))
})

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Event
    .findById(id)
    .then(event => res.status(200).json({ event, message: "Event getted" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving a single event", err }))
})

router.post("/", (req, res) => {
  const event = req.body;
  Event
  .create(event)
    .then(event => res.status(200).json({ event, message: "Event created" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating event", err }))
})

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Event
    .findByIdAndRemove(id)
    .then(() => res.status(200).json({ message: `Event ${id} deleted` }))
    .catch(err => res.status(500).json({ code: 500, message: "Error deleting event", err }))
})


router.put("/push", (req, res) => {
  
  Event
    .updateOne({_id: req.body.eventId},{$push: {participant: req.session.currentUser._id}})
    .then(users => res.status(200).json({ users, message: "User Join Event" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error Joining Event", err: err.message }))
})

router.put("/pull", (req, res) => {
  Event
    .updateOne( 
        {_id: req.body.eventId},
        {$pull: {participant: req.session.currentUser._id}}
      )
    .then(users => res.status(200).json({ users, message: "User Off Event" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error Off Event", err }))
})

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Event
    .findByIdAndUpdate(id, req.body, { new: true })
    .then(event => res.status(200).json({ event, message: "Event edited" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error editing event", err }))
})

module.exports = router;