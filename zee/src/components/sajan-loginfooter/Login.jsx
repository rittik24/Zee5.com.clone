import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div  >
      <div className='main'>
      <div><h4>Login to ZEE5</h4></div>
      <div ><p className='welcome'>Login to continue enjoying uninterrupted video and personalised experience.</p></div>
      <div className='login-logo'>
        <div> <img src="https://www.zee5.com/images/apple-social-icon-circle.svg?ver=2.52.64" alt="" /></div>
        <div> <img src="https://www.zee5.com/images/google-social-icon-circle.svg?ver=2.52.64" alt="" /></div>
        <div> <img src="https://www.zee5.com/images/fb-social-icon-circle.svg?ver=2.52.64" alt="" /></div>
        <div> <img src="https://www.zee5.com/images/twitter-social-icon.svg?ver=2.52.64" alt="" /></div>
      </div>
      <div><button className='or'>or</button></div>
      <div className='login-input'>
        <h5 >Email ID Or Mobile Number</h5>
        <form action="">  
           <input type="text" />
        </form>
        
        
      </div>

      </div>
      
    </div>
  )
}

export default Login
