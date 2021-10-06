const { Schema, model } = require('mongoose');

const cartSchema = new Schema (
  {
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },

    products: [{
      type: Schema.Types.ObjectId,
      ref: 'ShopItem',
    }],
    
  },
  {
    timestamps: true
  }

)

const Cart = model('Cart', cartSchema);

module.exports = Cart;