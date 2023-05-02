const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "jumpei0129@outlook.jp",
    pass: "junkun0129",
  },
});
const options = {
  from: "jumpei0129@outlook.jp",
  to: "junkun0129@gmail.com",
  subject: "sending email with node js ",
  text: "konnnaknnjidatooooo",
};

transporter.sendMail(options, (err, info) => {
  if (err) {
    console.log(err, "i");
    return;
  }
  console.log("Sent: " + info.response);
});
app.listen(8000, () => console.log("server is connected 8000"));
