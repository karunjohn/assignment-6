const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: 'candido.kulas@ethereal.email',//created with ethereal.mail
      pass: 'HpTVH3sG1MRSFj3trM',
    },
  });

  let info = await transporter.sendMail({
    from: '"Federal Agency" <karunjohn007@gmail.com>', // sender address
    to: "karunkjohn@outlook.com", // list of receivers
    subject: "Out standing Warrent ", // Subject line
    text: "Hello ", // plain text body
    html: "<b>Hai</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
