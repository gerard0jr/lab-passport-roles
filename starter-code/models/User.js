const passportLocalMongoose = require('passport-local-mongoose')
const Schema = require('mongoose').Schema

const userSchema = new Schema ({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  role: {
    type: String,
    enum: ["BOSS", "TA", "DEVELOPER"]
  },
  courses: [{
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }]
},
{
  timestamps: {
    createdAt: true,
    updatedAt: true
  },
  versionKey: false
})

userSchema.plugin(passportLocalMongoose, {usernameField:"email"})  

module.exports = require('mongoose').model('User', userSchema)