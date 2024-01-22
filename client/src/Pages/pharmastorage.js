import React from 'react'
import  Product from '../components/ProductItem'
function pharmastorage() {
  return (
    <div className='Productitem'>
        <Product
        img1 = {require("./assets/pharma-service-photo1.jpg")}
        img2 = {require("./assets/pharma-service-photo2.webp")}
        img3 = {require("./assets/pharma-service-photo3.webp")}
        img4 = {require("./assets/pharma-service-photo4.jpg")}
        title="Pharmaceutical Cold Storage Construction Service"
        description="Backed by a brilliant team, we are proficient to render Pharmaceutical Cold Storage Construction Service to our consumers.

        Our services meet the ever rising customers demands. Our services are rendered with the help of industry proficient experts, who ensure that timely completion in proficient way.
        
        Our customers can get this service at nominal rates from us.
        In order to render these construction services our adroit team of professional makes consistent improvisation of cutting-edge techniques and excellent methods of management.
        
        Additionally, these services are provided in a cost-effective manner"
        f1="Longer life"
        f2="Easy to use"
        f3="Robust nature"
        />
      
    </div>
  )
}

export default pharmastorage