import React from 'react';
import '../Client.css'

function Client() {
  return (
    <div className="client-container bg-white">
      <h2 className="heading">Our Clients</h2>

      <div className="box-sub-container">
        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/atos_image.png")} alt="" style={{height:"30px"}} />
          <h3>Atos</h3>
          <a href="https://atos.net/en/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/nestle.png")} alt="" style={{height:"70px"}} />
          <h3>Nestle</h3>
          <a href="https://www.nestle.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/mcdonalds.png")} alt="" />
          <h3>McDonald's</h3>
          <a href="https://www.mcdonalds.com/us/en-us/about-us.html" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/ms-navkar.png")} alt="" style={{height:"60px"}}/>
          <h4>Navkar Corporation Ltd</h4>
          <a href="https://www.navkarcorp.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside" data-aos="fade-up">
          <img src={require("../assets/vnr.png")} alt="" />
          <h3>VNR</h3>
          <a href="https://www.vnrseeds.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/lupin.png")} alt="" />
          <h3>Lupin</h3>
          <a href="https://www.lupin.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/jw-marriott.png")} alt="" />
          <h3>JW Marriott</h3>
          <a href="https://jw-marriott.marriott.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/glenmark.png")} alt=""  style={{height:"50px"}}/>
          <h3>Glenmark</h3>
          <a href="https://glenmarkpharma.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/novartis-image.png")} alt="" style={{height:"50px"}} />
          <h3>Novartis</h3>
          <a href="https://www.novartis.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/amul-image.jpg")} alt="" />
          <h3>Amul</h3>
          <a href="https://amul.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/faasos.png")} alt="" />
          <h3>Faasos</h3>
          <a href="https://www.instagram.com/faasos/?hl=en" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/tyson.png")} alt="" style={{height:"50px"}}/>
          <h3>Tyson</h3>
          <a href="https://www.tysonfoods.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/rotex.png")} alt="" style={{height:"50px"}} />
          <h3>Rotex</h3>
          <a href="https://rotexautomation.com/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside"  data-aos="fade-up">
          <img src={require("../assets/lodha.png")} alt=""  style={{height:"45px"}}/>
          <h3>Lodha</h3>
          <a href="https://www.lodhagroup.in/home/" className="btn-info">Read more</a>
        </div>

        <div className="box-inside">
          <img src={require("../assets/ig-pvt-ltd.png")} alt="" />
          <h3>IG pvt ltd</h3>
          <a href="https://www.iginternational.net/" className="btn-info">Read more</a>
        </div>

      </div>
    </div>
  );
}

export default Client;