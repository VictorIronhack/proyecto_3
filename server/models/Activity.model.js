const { Schema, model } = require('mongoose');

const activitySchema = new Schema ({
  
  name: {
    type: String,
    //required: true,
    minlength: 1,
    maxlength: 100,
    trim: true,
  },
  description: {
    type: String,
    //required: true,
    minlength: 1,
    maxlength: 400,
  },
  instructor: {
    type: String,
    //required: true
  },
 
  participant: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  
  date: {
    type: Date,
  },
  
  hourStart: {
    type: String,
    //required: true
  },

  hourEnd: {
    type: String
  },

  image: {
    type: String,
    required: true,
  },

  allDay: {
    type: Boolean,
    default: false
  },

  bg_video: {
    type: String,
  },

},
  {
  timestamps: true
  }
);

activitySchema.virtual('start').get(function() {
 
  return this.date;
});

activitySchema.virtual('end').get(function() {
  return new Date(this.date.getTime() + 1000*60*60*2);
});

const Activity = model('Activity', activitySchema);

module.exports = Activity;