import React from 'react'
import './Section6.css'
import Servicebox from './Servicebox'

function Section6() {
  return (
    <section className='section6-wrapper'>
        <h1>Business Services by TrustPay</h1>
        
        <div className='section6-container'>

            <Servicebox 
            sideImageURL={"https://assetscdn1.paytm.com/images/catalog/view_item/853877/1626077000254.png"}
            heading={"Accept payments online with ease."}
            para={"Grow your business with the payment gateway that powers India's largest brands and even the Paytm App."}/>

            <Servicebox 
            sideImageURL={"https://assetscdn1.paytm.com/images/catalog/view_item/853880/1656675942486.png"}
            heading={"In-shop payments powered by Paytm."}
            para={"Millions of small & big businesses use Paytm to accept payments anywhere any time with a wide range of solutions for all kind of merchants."}/>

        </div>
    </section>
  )
}

export default Section6
