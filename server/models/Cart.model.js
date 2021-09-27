const { Schema, model } = require('mongoose');

const cartSchema = new Schema (
  {
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },

    product: {
      type: Schema.Types.ObjectId,
      ref: 'ShopItem',
    },
    
  },
  {
    timestamps: true
  }

)

const Cart = model('Cart', cartSchema);

module.exports = Cart;