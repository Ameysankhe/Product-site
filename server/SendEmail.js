import nodemailer from 'nodemailer';

const Email = (options) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',   
    auth: {
      user: process.env.USER, 
      pass: process.env.PASSWORD,
    },
  });

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// Send email
const EmailSender = ({ fullName, email, phone, message }) => {
  // Path to the image
  const logoPath = './public/navbar--logo.png';
  
  // Create the email options with attachments
  const options = {
    from: `Gallops System And Solutions <${process.env.USER}>`,
    to: process.env.SEND_TO,
    subject: 'Enquiry Email From Gallops System And Solutions Website',
    html: `
      <div style="width: 100%; background-color: white; padding: 5rem 0">
        <div style="max-width: 700px; background-color: #f3f9ff; margin: 0 auto">
          <div style="width: 100%; background-color: #9FA8DA; padding: 20px 0">
            <a href="${process.env.CLIENT_URL}" >
              <img src="cid:logo_image" style="width: 100%; height: 70px; object-fit: contain" />
            </a> 
          </div>
          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
            <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px"></p>
            <div style="font-size: .8rem; margin: 0 30px">
              <p>FullName: <b>${fullName}</b></p>
              <p>Email: <b>${email}</b></p>
              <p>Phone: <b>${phone}</b></p>
              <p>Message: <i>${message}</i></p>
            </div>
          </div>
        </div>
      </div>
    `,
    attachments: [
      {
        filename: 'navbar--logo.png',  // Image filename
        path: logoPath,  // Image file path
        cid: 'logo_image',  // Content-ID for the image (used in HTML body)
      },
    ],
  };
  Email(options);
};

export default EmailSender;

