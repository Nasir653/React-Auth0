const nodemailer = require("nodemailer");
require("dotenv").config();

const transporters = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.User,
    pass: process.env.Pass,
  },
});

module.exports = transporters;
