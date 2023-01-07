const mongoose = require("mongoose");

const yupSchema = require("../model/secure/Yup");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlenght: 4,
    maxlenght: 200,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const userLoginData = mongoose.model("loginData", userSchema);
userSchema.statics.userValidation = function (body) {
  return yupSchema.validate(body);
};

const userLoginData = mongoose.model("loginData", userSchema);
(module.exports = userLoginData)
