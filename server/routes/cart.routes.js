const express = require("express");
const Cart = require("../models/Cart.model");
const router = express.Router();


router.get("/", (req, res) => {
  Cart
    .find({owner: req.session.currentUser._id})
    .populate("products")
    .select('name description price image')
    .then(carts => res.status(200).json(carts))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving carts", err }))
})
router.put("/push", (req, res) => {
  const { productId } = req.body
  Cart
    .updateOne(
        {owner: req.session.currentUser._id}, 
        {$push: {products: productId}})
    .then(carts => res.status(200).json({ carts, message: "Product Added" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error Adding Product", err: err.message }))
})

router.put("/pull", (req, res) => {
    const { productId } = req.body
  Cart
    .updateOne( 
        {owner: req.session.currentUser._id}, 
        {$pull: {products: productId}})
    .then(carts => res.status(200).json({ carts, message: "Product Delete from your Cart" }))
    .catch(err => res.status(500).json({ code: 500, message: "Error Deleting Product", err }))
})


router.put("/pullAll", (req, res) => {
 
Cart
  .updateMany( 
      {owner: req.session.currentUser._id}, 
      {products: []})
  .then(carts => res.status(200).json({ carts, message: "Empty Cart" }))
  .catch(err => res.status(500).json({ code: 500, message: "Error Empty Cart", err }))
})
module.exports = router;