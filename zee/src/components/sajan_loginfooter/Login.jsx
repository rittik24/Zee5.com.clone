import React from 'react'
import './Login.css'

import { Link } from "react-router-dom";
const Login = () => {
 
  return (
    <div >
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
        <p >Email ID Or Mobile Number</p>
        <form action="">  
           <input type="text" />
           <p>Password</p>
           <input type="password"  />
           <div className='forgot'>
            <span>Forgot Password?</span>
           </div>

           <input type="submit" value="Login" />
        </form>
        <div>
          <span>New to ZEE5?</span>
          {/* <span><Link to="/Register">Register</Link> </span> */}
        </div>
        
      </div>

      </div>
      
    </div>
  )
}

export default Login
