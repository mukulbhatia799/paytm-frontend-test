import React from 'react'
import './Section2.css'
import Card from '../card/Card'

function Section2() {
  return (
    <section className='section2-wrapper'>
        <div className='section2-container'>

            <h1>Recharge & Pay Bills on TrustPay.</h1>

            <div className='card-wrapper'>
                <Card imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png"}
                cardMessage={["Recharge", "Prepaid", "Mobile"]}/>

                <Card imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/733308/1626251043534.png"}
                cardMessage={["Pay", "Electricity", "Bill"]}/>

                <Card imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/733311/1626251101045.png"}
                cardMessage={["Recharge", "DTH", "Connection"]}/>

                <Card imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/733307/1626251127863.png"}
                cardMessage={["Book", "Gas", "Cylinder"]}/>

                <Card imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/1269194/1672827522093.png"}
                cardMessage={["Pay", "Broadband &", "Landline Bill"]}/>

                <Card imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/1269198/1672828917034.png"}
                cardMessage={["Pay", "Education", "Fee"]}/>

                <Card imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/757701/1626268580682.png"}
                cardMessage={["All", "Payment", "Services"]}/>
            </div>

        </div>
    </section>
  )
}

export default Section2
