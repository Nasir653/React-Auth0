const express = require("express");
const app = express();
const cors = require("cors");

const VerifyToken = require("../Backend/Controllers/Admin");

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

app.post("/auth/callback", VerifyToken);

app.listen(5000, (req, res) => {
  console.log(`Listen on 5000`);
});
