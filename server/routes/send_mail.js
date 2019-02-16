const node_mailer = require('nodemailer');
const { mailLogin, mailPass, mailSource, mailTarget } = require('../config');


function mailing(req) {
  const output = `
    <p>You have a new message from nice-app:</p>
    <ul>
        <li>name: ${req.body.name}</li>
        <li>email: ${req.body.email}</li>
        <li>address: ${req.body.address}</li>
        <li>gender: ${req.body.gender}</li>
    </ul>
    `;

  let transporter = node_mailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: mailLogin,
      pass: mailPass
    }
  });

  let mailOptions = {
    from: mailSource,
    to: mailTarget,
    subject: `nice-course | New message`,
    text: req.body.name,
    html: output
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', node_mailer.getTestMessageUrl(info));
  });
}

module.exports = mailing;