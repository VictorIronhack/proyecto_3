const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 3,
    maxlength: 15,
    match: /^\S+$/,
    trim: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ['MAN', 'USER'],
    default: 'USER',
    required: true
  },

  email: {
    type: String,
    required: true,
  },
  
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1931&q=80'
  },
  },
  {
    timestamps: true
  }

);

const User = model("User", userSchema);

module.exports = User;
