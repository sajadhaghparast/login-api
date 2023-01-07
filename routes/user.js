const { Router } = require("express");
const { createConnection } = require("mongoose");

const create = require("../controller/create");

const router = new Router();

router.post("/login", create.login);

router.get("/register", (req, res) =>
  res.status(200).json("path:/user/register")
);

router.post("/register", create.createUser);

module.exports = router;
