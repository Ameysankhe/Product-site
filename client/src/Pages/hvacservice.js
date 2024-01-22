import React from 'react'
import  Product from '../components/ProductItem'
function hvacservice() {
  return (
    <div className='Productitem'>
        <Product
        img1 = {require("./assets/hvac-service-photo1.jpg")}
        img2 = {require("./assets/hvac-service-photo2.webp")}
        img3 = {require("./assets/hvac-service-photo3.jpeg")}
        img4 = {require("./assets/hvac-service-photo4.jpeg")}
        title="HVAC Duct Installation Service"
        description="Leveraging on our affluent industry expertise, we provide HVAC Duct Installation Service.

        These services are accomplished employing the advanced techniques. In addition, our provided service is rendered in diverse terms and forms that meet on clients demand.
        
        Furthermore, we render this service at nominal rates. 
        In order to render these construction services our adroit team of professional makes consistent improvisation of cutting-edge techniques and excellent methods of management.
        
        Additionally, these services are provided in a cost-effective manner"
        f1="Longer life"
        f2="Easy to use"
        f3="Robust nature"
        />
      
    </div>
  )
}

export default hvacservice