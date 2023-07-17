const sendEmail = require("./sendEmail");

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  console.log(email);
  console.log(name);
  console.log(verificationToken);
  const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;
  const message = `<p> Please confirm your email by clicking on the folowing verification link: <a href ="${verifyEmail}">Verification Link</a> </p>`;
  return sendEmail({
    to: email,
    subject: "Email Confirmation",
    html: `<h4>Hello ${name}</h4> ${message}`,
  });
};

module.exports = sendVerificationEmail;
