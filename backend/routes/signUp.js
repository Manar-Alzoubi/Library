const Joi = require("joi");
const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const router = express.Router();

// validate data using 'joi'
router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(15).required(),
    email: Joi.string().min(8).max(80).required().email(),
    password: Joi.string().min(5).max(200).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);
  try {
    let user = await User.findOne({ email: req.body.email });
    // check if user exist
    if (user) return res.status(400).send("User already exists...");

    const { name, email, password } = req.body;
    // create a new User using User model
    user = new User({ name, email, password });
    // encrypt the password (Hashing)
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    // save user to password
    await user.save();

    const jwtSecretKey = process.env.SECRET_KEY;
 
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      jwtSecretKey
    );
    // send token with the user data emplies that a user is created
    res.send(token);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
