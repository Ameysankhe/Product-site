import React from 'react'
import  Product from '../components/ProductItem'
function icecreamstorage() {
  return (
    <div className='Productitem'>
        <Product
        img1 = {require("./assets/ice-cream-storage-photo1.webp")}
        img2 = {require("./assets/ice-cream-storage-photo2.webp")}
        img3 = {require("./assets/ice-cream-storage-photo3.webp")}
        img4 = {require("./assets/ice-cream-storage-photo4.webp")}
        title="Ice Cream Storage"
        description="We are actively betrothed in providing an extensive range of Ice Cream Cold Storage Room. Due to high demand, professionals make these products in diverse specifications that meet on clients demand.

        In order to render these construction services our adroit team of professional makes consistent improvisation of cutting-edge techniques and excellent methods of management.
        
        Additionally, these services are provided in a cost-effective manner"
        f1="Longer life"
        f2="Easy to use"
        f3="Rust resistance"
        />
      
    </div>
  )
}

export default icecreamstorage