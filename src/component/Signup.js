import React from "react"
import { Link } from "react-router-dom";
import './signup.css'



function  Signup()
{
    return(
     <>
     <div className="headinner">
            <div className="loginhead">
            <div className="login">Sign Up</div>
            </div>
            <div className="heading">
            <div className="enter">Please enter your Login and your Password</div>
            </div>
            <div className="fullname">
               <input type="text" placeholder="Name"/></div>
            <div className="password">
              <input type="text" placeholder="Password"/></div>
              <div className="password">
              <input type="text" placeholder="email"/></div>
                
                 <div className="googlehead">
                 <Link to ="/">    <div className="google">CREATE ACCOUNT</div></Link>
                 </div>
                 <div className="registerhead">
                 <div className="register">Already have an account?</div>
              <Link to ="/login" >  <div className="registerinner">Sign in</div></Link>
                 </div>
         </div> 
     
     
     
     
     </>


    )
}
export default Signup;