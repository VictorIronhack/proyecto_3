const express = require("express");
const ShopItem = require("../models/ShopItem.model");
const router = express.Router();

router.get("/", (req, res) => {
  ShopItem
    .find()
    .select('name description image price')
    .then(items => res.status(200).json(items))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving items", err }))
})

router.get("/:id", (req, res) => {
  const { id } = req.params;
  ShopItem
    .findById(id)
    .then(item => res.status(200).json({ item, message: "Items getted" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving a single item", err }))
})

router.post("/", (req, res) => {
  const item = req.body;
  ShopItem
    .create(item)
    .then(item => res.status(200).json({ item, message: "Item created" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error creating item", err }))
})

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  ShopItem
    .findByIdAndRemove(id)
    .then(() => res.status(200).json({ message: `Item ${id} deleted` }))
    .catch(err => res.status(500).json({ code: 500, message: "Error deleting item", err }))
})

router.put("/:id", (req, res) => {
  const { id } = req.params;
  ShopItem
    .findByIdAndUpdate(id, req.body, { new: true })
    .then(item => res.status(200).json({ item, message: "Item edited" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error editing item", err }))
})



module.exports = router;