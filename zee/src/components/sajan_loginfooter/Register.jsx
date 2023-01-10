import React from 'react'
import { Link,useNavigate} from "react-router-dom";
import { useState } from 'react';
import {SmallCloseIcon} from '@chakra-ui/icons'
import './Login.css'
import { auth } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { async } from '@firebase/util';
import Login from './Login';
const Register =() => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  const navigate=useNavigate()
  const handleSubmit=async (e)=>{
    e.preventDefault();
    setError("");
    try{
        let user= await createUserWithEmailAndPassword(auth,email,password)
        alert(`Registration Success through  ${user.user.email}`)
        navigate("/Login")
    }
    catch(err){

          alert(err.code)
    }
    
  }
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
        <form onSubmit={handleSubmit}>  
           <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
           <p>Password</p>
           <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
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
