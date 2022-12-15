import React from 'react'
import './Login.css'
import {SmallCloseIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";
const Login = () => {
    
  return (
    <div  >
      
      <div className='main'>
      <Link to="/" className='cancle'><SmallCloseIcon/></Link>
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
        <div style={{marginTop:'5px'}}>
          <span>New to ZEE5?</span>
          <span style={{color:" #a785ff",fontSize:"13px"}}><Link to="/register">Register</Link> </span>
        </div>
        
      </div>

      </div>
      
    </div>
  )
}

export default Login
