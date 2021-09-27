const { Schema, model } = require('mongoose');

const eventSchema = new Schema (
  {
    name: {
      type: String,
      unique: true,
      required: true,
      minlength: 5,
      maxlength: 30,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
      //todo default
    },
    location: {
        type: {
          type: String,
      },
      coordinates: [Number],
    },
    //todo agrupar direccion en un objeto
    address: {
      type: String
    },
    city: {
      type: String
    },
    description: {
      type: String,
      minlength: 5,
      maxlength: 100,
      trim: true
    },
    image: {
      type: String,
      required: true,
      default: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=627&q=80'
    },
    // participants
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  },
  {
    timestamps: true
  }

)

const Event = model('Event', eventSchema);

module.exports = Event;