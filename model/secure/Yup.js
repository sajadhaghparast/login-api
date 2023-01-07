const Yup = require("yup");

const schema = Yup.object().shape({
  firstname: Yup.string().required().min(3).max(200).trim(),
  lastname: Yup.string().required().min(3).max(200).trim(),
  email: Yup.string().email().required().trim(),
  password: Yup.string().min(4).max(200).required(),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null]),
});

module.exports = schema;
