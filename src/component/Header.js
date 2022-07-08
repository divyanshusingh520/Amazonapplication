import '../App.css';
import htmlimg from '../images/unnamed.webp'
import htmimg from '../images/cart.jpg'
import { Link } from 'react-router-dom';
function Header({setInputState} )

{
  console.log(setInputState.cart);
  function manageInput(e)
  {
    let {value}= e.target
    console.log(value)
    setInputState.setInputState(value)
  }   
    return (
         <div className="header">
         
           <div className="top">
               <div className="first">
               <Link to = "/" >  <img src= {htmlimg} alt =''/></Link>
               
               </div>
               <div className="search">
                
                   <div className="searchbar">
                     
                     <input type="text" placeholder="Search for products,brands and more" onChange={manageInput}></input>
                       <div className="small">
                       
                     <i class="fa fa-search"></i>
                   </div>
                   </div>
               </div>
               <div className='cart'>
               {/* <img src= {htmimg} alt =''/> */}
              <Link to="/cartpage"> <div className='cartinner'>Cart</div></Link>
               {/* <div */}
               <div className='side'>{setInputState.cart.length}</div>
                </div>
               <div className='sign'>
                  <div className='signin' >
                   <Link to = "login" >  <div className='internal'>Login</div></Link>
                  </div>
               </div>
               <div className='sign'>
                  <div className='signin' >
                   <Link to = "signup" >  <div className='internal'>Signup</div></Link>
                  </div>
               </div>

           </div>
          
        </div>

    )  
}
export default Header;