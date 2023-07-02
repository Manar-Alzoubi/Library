const Joi = require("joi");
const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

// validate data using 'joi'
router.post("/", async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(8).max(80).required().email(),
    password: Joi.string().min(5).max(200).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);
  try {
    let user = await User.findOne({ email: req.body.email });
    // check if user exist (if not exist should register first
    // can not login before sign up)
    if (!user)
      return res
        .status(400)
        .send("User is not exist, please sign up first ...");

    // check if password is correct or not // the same as in DB
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).send("Invalid email or password...");

      const jwtSecretKey = process.env.SECRET_KEY;
   
    // create token
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      jwtSecretKey
    );
    res.send(token);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
