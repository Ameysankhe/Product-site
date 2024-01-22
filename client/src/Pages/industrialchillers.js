import React from 'react'
import  Product from '.././components/ProductItem'
function industrialChillers() {
  return (
    <div className='Productitem'>
        <Product
        img1 = {require("./assets/industrial-chillers-photo2.webp")}
        img2 = {require("./assets/industrial-chillers-photo4.webp")}
        img3 = {require("./assets/industrial-chillers-photo1.webp")}
        img4 = {require("./assets/industrial-chillers-photo3.webp")}
        title="Industrial Chillers"
        description="Our organization is a leading name, engaged in providing an extensive series of Industrial Chillers.

        In order to render these construction services our adroit team of professional makes consistent improvisation of cutting-edge techniques and excellent methods of management.
        
        Additionally, these services are provided in a cost-effective manner"
        f1="Longer life"
        f2="Top in work"
        f3="Durable nature"
        />
      
    </div>
  )
}

export default industrialChillers