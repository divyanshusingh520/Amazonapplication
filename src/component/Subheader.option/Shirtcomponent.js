import React from "react";
import Card from "../Card";
import "../card.css"
export default function Shirtcomponent({data})
{
    console.log(data)
    return(
        <div className='parent'>
        {
           data.map((ele) =>     {
           return (
       

               <div className= "head">
                <div className='next'>
                 <img src = { `${ele.image}`}/>
                 </div>
                     <div className = "title">
                     <div className = "name">{ele.title}</div>
                     </div>
                           <div className='detail'>
                           <div className='price'>{ele.price}</div>
                           <div className='quantity'>{ele.quantity}</div>
                   </div>
                 <div className = "add">
 
                   <div className = "addcart">Add to Cart</div>
                   </div>
 
               </div>
      )
    })
   }
    </div>
    )
}