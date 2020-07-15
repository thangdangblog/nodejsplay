const mongoose = require('../db/db');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        validate: [
            {
                validator: function (value) {
                    return validator.isEmail(value);
                },
                message: (props) => "Email is unvalid",
            },
            {
                validator: async function (value) {
                    const existUser = await UserModel.findOne({
                        email: value,
                    });
                    return !existUser;
                },
                message: (props) => "Email is taken",
            },
        ],
    },
    username: {
        type: String,
        required: [true, "Username is required!"],
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
    },
});

// MDW
userSchema.pre('save', async function(){
  const passWord = this.password;
  this.password = await bcrypt.hash(passWord,8);
});

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;