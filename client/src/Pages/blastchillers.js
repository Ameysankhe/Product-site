import React from 'react'
import  Product from '.././components/ProductItem'
function blastchillers() {
  return (
    <div className='Productitem'>
        <Product
        img1 = {require("./assets/blast-chillers-photo1.png")}
        img2 = {require("./assets/blast-chillers-photo2.jpg")}
        img3 = {require("./assets/blast-chillers-photo3.jpg")}
        img4 = {require("./assets/blast-chillers-photo4.jpg")}
        title="Blast Chillers"
        description="To complete the assorted demands of our privileged customers, we are providing Blast Chiller to the industry in a diversity of structures.

        In order to render these construction services our adroit team of professional makes consistent improvisation of cutting-edge techniques and excellent methods of management.
        
        Additionally, these services are provided in a cost-effective manner"
        f1="Longer service life"
        f2="Latest structure"
        f3="Low maintenance"
        />
      
    </div>
  )
}

export default blastchillers