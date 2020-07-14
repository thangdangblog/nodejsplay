const mongoose = require('../db/db');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    validate: [
      {
        validator: function (value) {
            return validator.isEmail(value);
        },
        message: props => "Email is unvalid",
      },
      {
        validator: function (value) {
            return validator.isEmail(value);
        },
        message: props => "Email is unvalid",
      }
    ],
  },
  username: {
    type: String,
    required: [true,'Username is required!'],
  },
  password: {
    type: String,
    required: [true,'Password is required!'],
  }
});

// MDW
userSchema.pre('save', async function(){
  const user = this;
  const checkEmail = await UserModel.findOne({
    email: user.email
  });
  if(checkEmail) throw new Error("Email is taken");
});

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;