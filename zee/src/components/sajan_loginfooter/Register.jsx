import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
const Register = () => {
  const [value,setValue]=useState(true)
  return (
    <div  >
      <div className='main' style={{width:"25%"}}>
      <div><h4>Create a new account</h4></div>
      <div><p className='welcome' style={{fontWeight:450}}>Create an account to continue enjoying uninterrupted video and personalised experience</p></div>
      <div className='login-logo-google'>
        <div style={{backgroundColor:"white"}}>
        <img src="https://www.zee5.com/images/google-social-icon-circle.svg?ver=2.52.65" alt="" />
        </div>
        <div>
        <span style={{color:"#d6006b"}}>Sign in</span>
        </div>
        
      </div>
      <div><button className='reg-or'>or</button></div>
      <div className='login-input'>
        <p >Mobile Number</p>
        <form action="">  
           <input type="tel" name="" id="" />
           <input type="submit" value="Send OTP" id="bb" />
          
        </form>
        <div>
          <span>Already registered?</span>
          <span><Link to="/Login">Register</Link> </span>
        </div>
        
      </div>

      </div>
      
    </div>
  )
}

export default Register