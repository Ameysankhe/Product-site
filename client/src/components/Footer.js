import React from 'react';
import '../Footer.css'

function Footer() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return (
    <div className='Footer'>
      <div className='main--section bg-indigo-900 flex justify-around text-white'>
        <div className='footer--section flex text-justify'>      
            <img className='footer--image w-20 h-8' src={require('../assets/address.png')} alt="Address" />
          <div className="footer--text">
            <p className="main--text">Reach us</p>
            <p className='second--text'>The Platina, 7th Floor / 401, Tanvi Complex, S V Road, New Petrol Pump, Dahisar (E) Mumbai - 400068.</p>
          </div>
        </div>

        <div className='flex text-justify'>
          <a href='tel:7709971291'>
            <img className='footer--image w-6 h-8' src={require('../assets/phone-call-icon-phone_call.png')} alt="Call Us" />
          </a>
          <div className="footer--text">
            <p className="call-text">Call us</p>
            <p className='second--text-2'>7709971291</p>
          </div>
        </div>

        <div className='product--section flex text-justify'>
          <img className='footer--image w-6 h-7' src={require('../assets/productAndService.png')} alt="Product and Services" />
          <div className="footer--text">
            <p className="main--text">Product And Services</p>
            <p className='second--text'>Our focus on the qualitative procedures at our premises, we have maintained in-house quality checking facility for our provided range of Dairy Cold Storage Room, VRF System Installation, Cold Storage Cabin Construction Service and many more</p>
          </div>
        </div>
      </div>

      <div className='info--section bg-indigo-950 text-white text-center flex'>
        <p>&copy; {currentYear} Gallops Systems and Solutions</p>
      </div>
    </div>
  );
}

export default Footer;
