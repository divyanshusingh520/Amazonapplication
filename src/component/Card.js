import '../App.css';
// import img from '../images/shirt.jpg'
import './card.css'
import data from '../Object'
function Card({inputState})
{
  // console.log(inputState.addToCart);
  let filteredData = data.filter(ele=>ele.type.includes(inputState.inputState.toLowerCase()))
   
    return (
     <> 
       <div className='parent'>
         {
           filteredData.length==0? 
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
                            <div className='totalquantity'>{ele.totalquantity}</div>
                    </div>
                  <div className = "add">
  
                <button onClick={()=>inputState.addToCart(ele)}><div className = "addcart">Add to Cart</div></button>
                    </div>
  
                </div>
       )
     }) :filteredData.map((ele) => {
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
     </>
     
    )  
}
        
export default Card;
    
   