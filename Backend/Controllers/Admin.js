const axios = require("axios");
const jwt = require("jsonwebtoken");
const transporters = require("../utils/NodeMailer");

const AUTH0_DOMAIN = "dev-nwi15p3fvs261obk.us.auth0.com";

const VerifyToken = async (req, res) => {
  try {
    if (!req.body || !req.body.token) {
      return res.status(400).json({ error: "Token is required" });
    }

    const { token } = req.body;
    console.log(token);

    const response = await axios.get(
      "https://dev-nwi15p3fvs261obk.us.auth0.com/userinfo",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (!response) {
      return res.status(404).json({ message: "UnAuthorized User" });
    }
    const user = response.data;

    transporters.sendMail({
      from: "malikaadi653@gmail.com",
      to: user.email,
      subject: "Registration is Successfull",
      text: `Hi ${user.username}, Your Reqestration is successfull with us`,
      html: "",
    });

    res.json({ message: "Token is valid", user });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(401).json({ error: "Server Error" });
  }
};

module.exports = VerifyToken;
