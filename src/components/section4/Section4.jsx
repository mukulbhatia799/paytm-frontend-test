import React from 'react'
import './Section4.css'
import Megacard from './Megacard'
import Minicard from './Minicard'

function Section4() {
  return (
    <section className='section4-wrapper'>

        <h1>TrustPay Payment Instruments</h1>
        
        <div className='section4-container'>

            <Megacard 
            iconURL={"https://assetscdn1.paytm.com/images/catalog/view/307185/1617861564011.png"}
            iconLabel={"Paytm Wallet"}
            heading={"The Fastest Way to Pay In-store & Online."}
            para={"Load up your Paytm Wallet for free and make payments in a jiffy at over 21 million stores, websites and apps."}
            sideImageURL={"https://assetscdn1.paytm.com/images/catalog/view_item/728701/1618577020961.png"}/>

            <Megacard 
            iconURL={"https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png"}
            iconLabel={"UPI Money Transfer"}
            heading={"Pay anyone directly from your bank account."}
            para={"Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm Wallet or Directly from your Bank Account. Plus, send & receive money from anyone."}
            sideImageURL={"https://assetscdn1.paytm.com/images/catalog/view_item/728702/1626342071104.png"}/>

            <Megacard 
            iconURL={"https://assetscdn1.paytm.com/images/catalog/view/307191/1613622537678.png"}
            iconLabel={""}
            heading={"Want it? No more waiting for it."}
            para={"With Paytm Postpaid, your wishlist doesn't have to be on the waitlist. Shop for the things you want today and pay for them next month."}
            sideImageURL={"https://assetscdn1.paytm.com/images/catalog/view_item/850764/1626077030984.png"}
            learn={true}
            largeicon={true}/>

            <div className="mini-card-row">
              <Minicard 
              bankIconURL={"https://assetscdn1.paytm.com/images/catalog/view_item/853975/1640242865113.png"}
              heading={"Unlimited Cashback Every time"}
              para={"Paytm HDFC Bank Select Credit Card. A card with assured Cashback and incredible offers."}
              bankCardURL={"https://assetscdn1.paytm.com/images/catalog/view_item/853975/1640241561388.png"}/>

              <Minicard 
              bankIconURL={"https://assetscdn1.paytm.com/images/catalog/view_item/853976/1640242163727.png"}
              heading={"India’s Most Sincere Credit Card"}
              para={"Paytm SBI Card SELECT - With Intelligent Features & Great Rewards that Never Expire."}
              bankCardURL={"https://assetscdn1.paytm.com/images/catalog/view_item/853976/1626079147084.png"}
              pad={true}/>
            </div>

        </div>
    </section>
  )
}

export default Section4
