const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trimmed: true
  },
  password: {
    type: String,
    required: true,
    trimed: true,
    validate: [({length}) => { length >= 6 }, "Password must be longer than 6 characters"]
  },
  email: {
    type: String,
    required: true
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
