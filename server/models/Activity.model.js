const { Schema, model } = require('mongoose');
const activitySchema = new Schema ({

  name: {
    type: String,
    //required: true,
    minlength: 1,
    maxlength: 100,
    trim: true,
  },

  desciption: {
    type: String,
    //required: true,
    minlength: 1,
    maxlength: 100,
  },

  professor: {
    type: String,
    //required: true
  },

  receiver: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  date: {
    type: Date,
  },

  hour: {
    type: String,
    //required: true
  }
},
  {
  timestamps: true
  }
);
const Activity = model('Activity', activitySchema);
module.exports = Activity;
