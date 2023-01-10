// import React, { useState } from 'react'
// import GooglePayButton from "@google-pay/button-react"
// import "./Payment.css";



// const Payment = () => {
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   if(modal) {
//     document.body.classList.add('active-modal')
//   } else {
//     document.body.classList.remove('active-modal')
//   }
//   return (
//     <div className='payment-m'>

//     <div>
//     <div className='pre-p'>
//     <div> <h3  style={{color:"black",fontSize:"20px"}}>Make Payment</h3></div>
//     <div> <h3 style={{color:"black",fontSize:"20px"}}>$699</h3></div>
     
//     </div>
//     <div className='main-p'>
 
 
//         <GooglePayButton
//   environment="TEST"
//   paymentRequest={{
//     apiVersion: 2,
//     apiVersionMinor: 0,
//     allowedPaymentMethods: [
//       {
//         type: 'CARD',
//         parameters: {
//           allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//           allowedCardNetworks: ['MASTERCARD', 'VISA'],
//         },
//         tokenizationSpecification: {
//           type: 'PAYMENT_GATEWAY',
//           parameters: {
//             gateway: 'example',
//             gatewayMerchantId: 'exampleGatewayMerchantId',
//           },
//         },
//       },
//     ],
//     merchantInfo: {
//       merchantId: '12345678901234567890',
//       merchantName: 'Demo Merchant',
//     },
//     transactionInfo: {
//       totalPriceStatus: 'FINAL',
//       totalPriceLabel: 'Total',
//       totalPrice: '100.00',
//       currencyCode: 'USD',
//       countryCode: 'US',
//     },
//   }}
//   onLoadPaymentData={paymentRequest => {
//     console.log('load payment data', paymentRequest);
//   }}
// />

// <button className='btn-p , btn-modal' onClick={toggleModal} >UPI</button>
// {modal && (
//         <div className="modal">
//           <div onClick={toggleModal} className="overlay"></div>
//           <div className="modal-content">
//             <h2>UPI ID/VPA</h2>
//             <input type="text" name="" id="" placeholder='e.g moumita@upi' className='input-pay'  />
//             {/* <hr /> */}

//             <p> A collect request will be sent to this UPI ID</p>
//             <button className='btn-payment' onClick={toggleModal}>paynow</button>
//             {/* <AiOutlineCloseSquare className="close-modal" onClick={toggleModal}/> */}
//             <button className="close-modal" onClick={toggleModal}>
//               CLOSE
//             </button>
//           </div>
//         </div>
//       )}
// <button className='btn-p'>Credit/Debit Card</button>
// <button className='btn-p'>Wallets</button>
// <button className='btn-p'>Netbanking</button>



//     </div>
//     </div>
//     </div>
//   )
// }

// export default Payment



import React, { useState } from 'react'
import GooglePayButton from "@google-pay/button-react"
import "./Payment.css";


import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'


const Payment = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <Box>
    <Center>
      <Card maxW='sm'>
  <CardBody>
  
<Center>
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
</Center>
    <Stack mt='2' spacing='3'>
      <Center>
        <Button size='md'
  height='48px'
  width='250px'
  border='2px'
  bg="white"
  color= "#391b53"
  onClick={toggleModal}>UPI</Button>
      </Center>
      <Center>
        <Button size='md'
  height='48px'
  width='250px'
  border='2px'
  bg="white"
  color= "#391b53" onClick={toggleModal}>Credit/Debit Card</Button>
      </Center>
      <Center>
        <Button size='md'
  height='48px'
  width='250px'
  border='2px'
  bg="white"
  color= "#391b53" onClick={toggleModal}>Wallets</Button>
      </Center>
      <Center>
        <Button size='md'
  height='48px'
  width='250px'
  border='2px'
  bg="white"
  color= "#391b53" onClick={toggleModal}>Netbanking</Button>
      </Center>
    
   
    </Stack>
  </CardBody>
  <Divider />

</Card>
</Center>
    </Box>
  )
}

export default Payment



 
       