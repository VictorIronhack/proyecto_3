const { Schema, model } = require('mongoose');

const shopItemSchema = new Schema ({
  
  name: {
    type: String,
    //required: true,
    minlength: 1,
    maxlength: 100,
    trim: true,
  },

  image: {
    type: String,
    default: '',
  },

  price: {
    type: Number,
  },
  
  description: {
    type: String,
    //required: true,
    minlength: 1,
    maxlength: 100,
  },
},{
  timestamps: true
}
);

const ShopItem = model('ShopItem', shopItemSchema);

module.exports = ShopItem;