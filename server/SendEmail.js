import nodemailer from 'nodemailer';

const Email = (options) => {
    let transpoter = nodemailer.createTransport({
        service:"hotmail",
        auth:{
            user:process.env.USER, //user or email
            pass:process.env.PASSWORD//password
        },
    });
    transpoter.sendMail(options, (err,info) => {
        if(err) {
            console.log(err);
            return;
        }
    });
};

// send email
const EmailSender = ({fullName,email,phone,message}) => {
    const options = {
        from: `Gallops System And Solutions <${process.env.USER}>`,
        to:process.env.SEND_TO,
        subject: "Enquiry Email From Gallops System And Solutions Website",
        html:`<div style="width: 100%; background-color: white; padding: 5rem 0">
        <div style="max-width: 700px; background-color: #f3f9ff; margin: 0 auto">
          <div style="width: 100%; background-color: #9FA8DA; padding: 20px 0">
          <a href="${process.env.CLIENT_URL}" ><img
              src="https://www.gallops.co.in/images/logo_copy.jpg"
              style="width: 100%; height: 70px; object-fit: contain"
            /></a> 
          
          </div>
          <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
            <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
            </p>
            <div style="font-size: .8rem; margin: 0 30px">
              <p>FullName: <b>${fullName}</b></p>
              <p>Email: <b>${email}</b></p>
              <p>Phone: <b>${phone}</b></p>
              <p>Message: <i>${message}</i></p>
            </div>
          </div>
        </div>
      </div>`,
    };
    Email(options)
};

export default EmailSender
