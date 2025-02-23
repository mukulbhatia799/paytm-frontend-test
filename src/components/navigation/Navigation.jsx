import React from 'react'
import './Navigation.css'

function Navigation() {

    const handleHoverEnter = () => {
        document.getElementById("userIcon").src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logoutImg.svg"
    }

    const handleHoverLeave = () => {
        document.getElementById("userIcon").src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/loginImg.svg"
    }


  return (
    <div className='navigation'>

        {/* hamburger Menu */}
        <button className="hamburger-nav">
            &#9776;
        </button>

        <a href="#" className="logo"><img src="https://assetscdn1.paytm.com/images/catalog/category/5165/paytm_logo.png" alt="image of paytm logo" /></a>

        <div className="nav-items">
            <a href="#" className="nav-item">TrustPay for Consumer</a>
            <a href="#" className="nav-item">TrustPay for Business</a>
            <a href="#" className="nav-item">Investor Relations</a>
            <a href="#" className="nav-item">Company</a>
            <a href="#" className="nav-item">Career</a>
        </div>

        <button className='sign-in'onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>Sign In <img id="userIcon" src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/loginImg.svg" alt="User icon" /></button>
    </div>
  )
}

export default Navigation