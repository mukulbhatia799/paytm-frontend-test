import React from 'react'
import './Section3.css'
import Card from '../card/Card'

function Section3() {
  return (
    <section className='section3-wrapper'>
        <div className='section3-container'>

            <h1>Book & Buy on TrustPay.</h1>

            <div className='card-wrapper'>
                <Card bgcolor={"dark"} imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/733295/1626259710574.png"}
                cardMessage={["Movie", "Tickets"]}/>

                <Card bgcolor={"dark"} imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/733296/1626259884425.png"}
                cardMessage={["Flight", "Tickets"]}/>

                <Card bgcolor={"dark"} imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/729996/1626260477699.png"}
                cardMessage={["Bus", "Tickets"]}/>

                <Card bgcolor={"dark"} imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/729997/1626260495975.png"}
                cardMessage={["Train", "Tickets"]}/>

                <Card bgcolor={"dark"} imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/729998/1666185237748.png"}
                cardMessage={["Buy", "Insurance"]}/>

                <Card bgcolor={"dark"} imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/729999/1626259968563.png"}
                cardMessage={["International", "Flights"]}/>

                <Card bgcolor={"dark"} imgURL={"https://assetscdn1.paytm.com/images/catalog/view_item/730001/1626450848003.png"}
                cardMessage={["Invest", "In Stocks"]}/>
            </div>

        </div>
    </section>
  )
}

export default Section3
