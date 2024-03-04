import React from 'react';
import '../Brands.css'


function Brands() {
  return (
    <div className="brands-container" data-aos="fade-up">
      <h3 className="heading head-text text-center">Brands We Deal In</h3>

      <div className="box-container">
        <div className="box-subset">
          <img src={require("../assets/aboutusimage1.png")} alt=""/>
        </div>

        <div className="box-subset">
          <img src={require("../assets/aboutusimage5.png")} alt=""/>
        </div>

        <div className="box-subset">
          <img src={require("../assets/aboutusimage6.png")} alt=""/>

        </div>

        <div className="box-subset">
          <img src={require("../assets/aboutusimage7.png")} alt=""/>
        </div>

      </div>
    </div>
  );
}

export default Brands;