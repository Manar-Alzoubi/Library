const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. Not authorized...");
  try {
    const jwtSecretKey = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, jwtSecretKey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid auth token...");
  }
}

module.exports = auth;