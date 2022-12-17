import React from 'react'
import GooglePayButton from "@google-pay/button-react"
import "./Payment.css";



const Payment = () => {
  return (
    <div className='payment-m'>
    {/* <h1 className='pay-h'>Make Payment</h1> */}
    <div>
    <div className='pre-p'>
    <div> <h3  style={{color:"black",fontSize:"20px"}}>Make Payment</h3></div>
    <div> <h3 style={{color:"black",fontSize:"20px"}}>$699</h3></div>
     
    </div>
    <div className='main-p'>
 
 
        <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
{/* <h3 style={{color:"black"}}>UPI</h3>
<h3 style={{color:"black"}}>UPI</h3>
<h3 style={{color:"black"}}>UPI</h3> */}
<button className='btn-p'>UPI</button>
<button className='btn-p'>Credit/Debit Card</button>
<button className='btn-p'>Wallets</button>
<button className='btn-p'>Netbanking</button>



    </div>
    </div>
    </div>
  )
}

export default Payment