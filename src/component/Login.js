import React from "react"
import { Link } from "react-router-dom";
import './login.css'




function Login()
{
    return(
     <>
      
      <div className="headinner">
            <div className="loginhead">
            <div className="login">Login</div>
            </div>
            <div className="heading">
            <div className="enter">Please enter your Login and your Password</div>
            </div>
            <div className="fullname">
               <input type="text" placeholder="Username or E-mail"/></div>
            <div className="password">
              <input type="text" placeholder="Password"/></div>
              <div className="forgetpassword">
              <div className="forget">Forget password?</div>
              </div>
              <Link to ="/">  <div className="submit"><button>Login</button></div></Link>
                 <div className="googlehead">
                 <div className="google">Or sign-in with Google</div>
                 </div>
                 <div className="registerhead">
                 <div className="register">Not a member?</div>
                <Link to ="signup"> <div className="registerinner">Regsiter!</div></Link>
                 </div>
         </div> 
     
    
     
     
     </>


    )
}
export default Login;