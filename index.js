const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use("/email", require("./src/route/email"));
app.listen(8000, () => console.log("server is connected 8000"));
