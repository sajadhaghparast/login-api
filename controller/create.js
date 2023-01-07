const bcrypt = require("bcrypt");

const {Schema}  = require("../model/secure/Yup");

const userLoginData = require("../model/User");

exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    await userLoginData.userValidation(req.body);
    const { firstname, lastname, email, password } = req.body;
    const mail = await userLoginData.findOne({ email });
    if (mail) {
      return res.status(400).json("email tekrari ast");
    }
    const passString = password.toString();
    const crypt = await bcrypt.hash(passString, 10);

    const newUser = new userLoginData({
      firstname,
      lastname,
      email,
      password: crypt,
    });
    console.log(crypt);
    await newUser.save();
    res.status(200).json(newUser);
    console.log(newUser);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

exports.login = async (req, res) => {
  const userExist = await userLoginData.exists(req.body.email);
  if (userExist) res.status(200).json(userExist);
};
