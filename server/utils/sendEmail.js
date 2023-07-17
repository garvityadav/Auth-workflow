const nodemailer = require("nodemailer");
const nodeMailerConfig = require("./nodemailerConfig");
const sendMail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport(nodeMailerConfig);
  const info = await transporter.sendMail({
    from: '"Garvit 👻" <garvityadav759@gmail.com>', // sender address
    to,
    subject,
    html,
  });

  console.log("Message sent: %s", info.messageId);
};

module.exports = sendMail;
