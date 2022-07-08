import React, { useState } from 'react'
import './cart.css'
import "../card.css"

export default function Cart({cart})
{
  const state = useState();
  const [quantity] = useState(5);
  
  function IncNum()
{
  // setQuantity(quantity+1);
  // console.log('clicked')
}
    return(
    <>
    <div className='parent'>
    {
      cart.cart.length==0?
      
      <div className='cart-container'>
        Their is no card in Cart
        </div>
      :cart.cart.map((ele)=>{
        return(
          <div className='cart-container'>
          <div className='image-container'>
            <img src={ele.image}/>
          </div>
          <div className='product-detail'>
            <div>Price</div>
            <div> {ele.price}</div>
          </div>
          <div className='quantity-container'>
            
            <div>Quantity</div>
            <button onClick={IncNum}>+</button>
            <div>Pcs {ele.quantity}</div>
            <button>-</button>
          </div>
          <div className='delete'>
            <button>Delete from cart</button>
          </div>
          <div className='total'>
           <div>Total</div>
           <div>{ele.price*ele.quantity}</div>
          </div>
          </div>
        )
      })

    }
    
    </div>
     </>
    )
}