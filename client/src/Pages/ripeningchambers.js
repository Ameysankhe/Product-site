import React from 'react'
import  Product from '.././components/ProductItem'
function ripeningchambers() {
  return (
    <div className='Productitem'>
        <Product
        img1 = {require("./assets/ripening-chambers-photo1.jpg")}
        img2 = {require("./assets/ripening-chambers-photo2.jpg")}
        img3 = {require("./assets/ripening-chambers-photo3.jpg")}
        img4 = {require("./assets/ripening-chambers-photo4.jpg")}
        title="Ripening Chambers"
        description="Keeping in view varying requirements and demands of our honored clientele, we are capable to offer Ripening Chamber in diverse structures.

        In order to render these construction services our adroit team of professional makes consistent improvisation of cutting-edge techniques and excellent methods of management.
        
        Additionally, these services are provided in a cost-effective manner"
        f1="Longer life"
        f2="Easy to use"
        f3="Robust nature"
        />
      
    </div>
  )
}

export default ripeningchambers