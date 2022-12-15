import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import {SmallCloseIcon} from '@chakra-ui/icons'
const Register = () => {
  const [value,setValue]=useState(true)
  return (
    <div  >
      <div className='main' style={{width:"25%"}}>
      <Link to="/" className='cancle'><SmallCloseIcon/></Link>
      <div className='heading'><h3>Create a new account</h3></div>
      <div><p className='welcome' style={{fontWeight:450,color:"#cfc3ca"}}>Create an account to continue enjoying uninterrupted video and personalised experience</p></div>
      <div className='login-logo-google'>
        <div style={{backgroundColor:"white"}}>
        <img src="https://www.zee5.com/images/google-social-icon-circle.svg?ver=2.52.65" alt="" />
        </div>
        <div>
        <span >Sign in</span>
        </div>
        
      </div>
      <div><button className='reg-or'>or</button></div>
      <div className='login-input'>
        <p >Email</p>
        <form action="">  
           <input type="text" />
           <p>Password</p>
           <input type="password"  />
           <div className='forgot'>
            <span>Forgot Password?</span>
           </div>

           <input type="submit" value="SignUp" />
        </form>
        
        <div className='existing'>
          <span>Already registered?</span>
          <span><Link to="/login">Login</Link> </span>
        </div>
        
      </div>

      </div>
      
    </div>
  )
}

export default Register
