const express = require("express");
const Activity = require("./../models/Activity.model");
const router = express.Router();

router.get("/", (req, res) => {
  Activity
    .find()
    .then(activities => {
      const mappedActivitites = activities.map(elm => {
        const copy = {...elm._doc}
        copy.start = elm.start
        copy.end = elm.end
        copy.bgColor = elm.bgColor
        return copy
      })
      res.status(200).json(mappedActivitites)
    })
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving activities", err }))
})

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Activity
    .findById(id)
    .then(activity => res.status(200).json({ activity, message: "activity getted" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving a single activity", err }))
})

router.post("/", (req, res) => {
  const activity = req.body;
  Activity
    .create(activity)
    .then(activity => res.status(200).json({ activity, message: "activity created" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating activity", err }))
})

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Activity
    .findByIdAndRemove(id)
    .then(() => res.status(200).json({ message: `Activity ${id} deleted` }))
    .catch(err => res.status(500).json({ code: 500, message: "Error deleting activity", err }))
})

router.put("/push", (req, res) => {
Activity
.updateOne({_id: req.body.activityId}, {$push: {participant: req.session.currentUser._id}})
.then(users => {
  res.status(200).json({ users, message: "User Join Activity" })})
  .catch(err => res.status(500).json({ code: 500, message: "Error Joining Activity", err: err.message }))
})

router.put("/pull", (req, res) => {
  Activity
  .updateOne(
    {_id: req.body.activityId},
    {$pull: {participant: req.session.currentUser._id}}
    )
    .then(users => res.status(200).json({ users, message: "User Off Activity" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error Off Activity", err }))
  })

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Activity
    .findByIdAndUpdate(id, req.body, { new: true })
    .then(activity => res.status(200).json({ activity, message: "Activity edited" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error editing activity", err }))
})


router.put("/push", (req, res) => {
  console.log({participant: req.session.currentUser._id})
  Activity
  .updateOne({_id: req.body.activityId}, {$push: {participant: req.session.currentUser._id}})
  .then(users => {
    console.log({participant: req.session.currentUser._id})
    res.status(200).json({ users, message: "User Join Activity" })})
    .catch(err => res.status(500).json({ code: 500, message: "Error Joining Activity", err: err.message }))
  })
  
  
  router.put("/pull", (req, res) => {
    Activity
    .updateOne( 
      {_id: req.body.activityId},
      {$pull: {participant: req.session.currentUser._id}}
      )
      .then(users => res.status(200).json({ users, message: "User Off Activity" }))
      .catch(err => res.status(500).json({ code: 500, message: "Error Off Activity", err }))
    })
    
    router.delete("/:id", (req, res) => {
      const { id } = req.params;
      Activity
      .findByIdAndRemove(id)
      .then(() => res.status(200).json({ message: `Activity ${id} deleted` }))
      .catch(err => res.status(500).json({ code: 500, message: "Error deleting activity", err }))
    })

    router.put("/:id", (req, res) => {
      const { id } = req.params;
      Activity
      .findByIdAndUpdate(id, req.body, { new: true })
      .then(activity => res.status(200).json({ activity, message: "Activity edited" }))
      .catch(err => res.status(500).json({ code: 500, message: "Error editing activity", err }))
    })
    
module.exports = router;