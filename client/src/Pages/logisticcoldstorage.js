import React from 'react'
import  Product from '../components/ProductItem'
function logisticcoldstorage() {
  return (
    <div className='Productitem'>
        <Product
        img1 = {require("./assets/logistic-cold-storage-photo1.jpg")}
        img2 = {require("./assets/logistic-cold-storage-photo2.jpg")}
        img3 = {require("./assets/logistic-cold-storage-photo3.webp")}
        img4 = {require("./assets/logistic-cold-storage-photo4.jpg")}
        title="Logistic Cold Storage"
        description="To meet the diversified requirements of our respected customers, we are engaged in offering an extensive series of Logistic Cold Storage Room.

        In order to render these construction services our adroit team of professional makes consistent improvisation of cutting-edge techniques and excellent methods of management.
        
        Additionally, these services are provided in a cost-effective manner"
        f1="Longer life"
        f2="Easy to use"
        f3="Robust nature"
        />
      
    </div>
  )
}

export default logisticcoldstorage