import React from 'react'
import { useState, useContext } from 'react';
import './Login.css'
import {SmallCloseIcon} from '@chakra-ui/icons';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase';
import { Link,useNavigate,Navigate} from "react-router-dom";
import { authContext } from '../../routs/AuthContext';
import { async } from '@firebase/util';
const Login = () => {
 const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const {handlelogin} = useContext(authContext);

  const navigate=useNavigate()
  const handleSubmit=async (e)=>{
    e.preventDefault();
    
    try{
        let user= await signInWithEmailAndPassword(auth, email, password)
        alert(`Login Success through  ${user.user.email}`)
        console.log(user)
         localStorage.setItem("token",user.user.email)
         handlelogin(user.user.email);
        navigate("/")
    
    }
    catch(err){

          alert(err.code)
          
    }
  }
  const googleAuth=async(e)=>{
    e.preventDefault();
    try{
     let google= await  signInWithPopup(auth,new GoogleAuthProvider())
    alert(`Login Success through  ${google.user.email}`)
    localStorage.setItem("token",google.user.email)
    handlelogin(google.user.email);
    navigate('/')
     
    }
    catch(err){
        
             console.log(err.message)
             alert(err.code)
    }
}
  return (
    <div  >
      <div className='main'>
      <Link to="/" className='cancle'><SmallCloseIcon/></Link>
      <div><h4 >Login to ZEE5</h4></div>
      <div ><p className='welcome'>Login to continue enjoying uninterrupted video and personalised experience.</p></div>
      <div className='login-logo'>
        <div> <img src="https://www.zee5.com/images/apple-social-icon-circle.svg?ver=2.52.64" alt="" /></div>
        <div className='google-btn' > <img src="https://www.zee5.com/images/google-social-icon-circle.svg?ver=2.52.64" alt="" onClick={googleAuth}/></div>
        <div> <img src="https://www.zee5.com/images/fb-social-icon-circle.svg?ver=2.52.64" alt="" /></div>
        <div> <img src="https://www.zee5.com/images/twitter-social-icon.svg?ver=2.52.64" alt="" /></div>
      </div>
      <div><button className='or'>or</button></div>
      <div className='login-input'>
        <p >Email ID</p>
        <form  onSubmit={handleSubmit}>  
           <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
           <p>Password</p>
           <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
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
