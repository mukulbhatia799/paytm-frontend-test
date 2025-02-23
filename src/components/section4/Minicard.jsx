import React from 'react'
import './Minicard.css'

function Minicard({bankIconURL, heading, para, bankCardURL, pad}) {
  return (
    <div className='mini-card-container'>
        
        <a href="#" className='bank-card-link' data-pad={pad}>
            <img src={bankIconURL} alt="bank logo" className='bank-image'/>
            <h1>{heading}</h1>
            <p>{para}</p>
            <img src={bankCardURL} alt="bank logo" className='bank-card-image'/>
            
        </a>
      
    </div>
  )
}

export default Minicard
