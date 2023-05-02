const nodemailer = require("nodemailer");

const submitHandle = async (req, res, next) => {
  console.log(req.body, "req body");
  const { name, email, subject, text } = req.body;
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
    subject: subject,
    text: `name: ${name} email: ${email} text: ${text}`,
  };
  const sendEmail = await transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("sent" + info.response);
  });
  return res.json(sendEmail);
};

module.exports = {
  submitHandle,
};
