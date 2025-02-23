import React from 'react'
import './Section5.css'
import Megabox from './Megabox'

function Section5() {
  return (
    <section className='section5-wrapper'>

        <h1>Financial Services by TrustPay</h1>

        <div className="cont-wrapper" style={{background:"white"}}>
            <div className="section5-container">
                <Megabox 
                iconURL={"https://assetscdn1.paytm.com/images/catalog/view/307193/1617696576778.png"}
                heading={"India's most sincere bank."}
                para={"Paytm Payments Bank offers secure, transparent and risk-free banking at your fingertips. With instant account opening, virtual debit card and zero balance requirements, experience the future of banking today."}
                sideImageURL={"https://assetscdn1.paytm.com/images/catalog/view_item/728826/1626076427497.png"}/>
            </div>
        </div>

        <div className="cont-wrapper" style={{backgroundImage:"url(https://pwebassets.paytm.com/commonwebassets/commonweb/images/home/gray-spike.png)", backgroundSize:"cover", backgroundClip:"content-box", backgroundColor:"#f5f7fa"}}>
            <div className="section5-container">
            <Megabox 
                iconURL={"https://assetscdn1.paytm.com/images/catalog/view/308774/1617696247991.png"}
                heading={"Build Long-term Wealth & Achieve your Goals."}
                para={"Investing on Paytm Money is transparent, low-cost and commission-free. Buy stocks & mutual funds that can help you create wealth & realise your dreams."}
                sideImageURL={"https://assetscdn1.paytm.com/images/catalog/view_item/788781/1626077377376.png"}
                right={true}/>
            </div>
        </div>

        <div className="cont-wrapper" style={{background:"white"}}>
            <div className="section5-container">
            <Megabox 
                iconURL={"https://assetscdn1.paytm.com/images/catalog/view/308775/1653901470333.jpeg"}
                heading={"Insurance made easy."}
                para={"Buying insurance does not have to be tedious, time-consuming & confusing. Paytm Insurance removes the worry of getting insured by making it simple, convenient & easy-to-understand."}
                sideImageURL={"https://assetscdn1.paytm.com/images/catalog/view_item/788790/1653913927257.png"}/>
            </div>
        </div>

        <div className="cont-wrapper" style={{background:"#f5f7fa"}}>
            <div className="section5-container">
            <Megabox 
                iconURL={"https://assetscdn1.paytm.com/images/catalog/view/308777/1617695287770.png"}
                heading={"Get a Personal Loan in 2 Minutes."}
                para={"Paytm offers India's quickest multi-purpose, hassle-free loan. It is 100% digital, transparent and paperless."}
                sideImageURL={"https://assetscdn1.paytm.com/images/catalog/view_item/850765/1655987252365.png"}
                right={true}/>
            </div>
        </div>
        
      
    </section>
  )
}

export default Section5
