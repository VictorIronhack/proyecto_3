const express = require("express");
const Activity = require("../../../Project_3/server/models/Activity.model");
const router = express.Router();

router.get("/", (req, res) => {
  Activity
    .find()
    .select('name date image')
    .then(activities => res.status(200).json(activities))
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

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Activity
    .findByIdAndUpdate(id, req.body, { new: true })
    .then(activity => res.status(200).json({ activity, message: "Activity edited" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error editing activity", err }))
})



module.exports = router;