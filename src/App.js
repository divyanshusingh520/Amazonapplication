
import './App.css';
import { useState } from 'react';
import Header from './component/Header';
import Contents from './component/Contents';
 import Card from './component/Card';
import Login from './component/Login';
import Signup from './component/Signup';

import { BrowserRouter,Routes,Route} from "react-router-dom"
import Shirt from './component/Subheader.option/Shirt';
import Shoes from './component/Subheader.option/Shoes';
// import Head from './component/Head';
import Cart from './component/CartPage/Cart';

function App() {
  let [inputState, setInputState] = useState('sample');
  const [cart, setCart] = useState([]);
  function addToCart(product)
  {
    console.log("clicked on cart",product);
    const productinCart = cart.find((ele)=>ele.id===product.id);
    if(productinCart)
    {
      
      setCart(cart.map((ele)=> ele.id === product.id ? {...productinCart,quantity:productinCart.quantity + 1}:ele))
       
    }
    else
    {
      setCart([...cart,{...product, quantity: 1}])
    }
  } 
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header setInputState = {{setInputState,cart}}/>
      <Contents/>
      {/* <Card/> */}
      <Routes>
      <Route path="/" element={<Card inputState={{inputState,addToCart}}/>}/>
      <Route path="/cartpage" element = {<Cart cart={{cart,addToCart}}/>}/>
        <Route path="/" element={<Header/>}/>

     
        <Route path="/login" element={<Login/>}/>
        <Route path="/shirt" element={<Shirt/>}/>
        <Route path="/shoes" element={<Shoes/>}/>
        <Route path="/main" element={<Card/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    
      
      </BrowserRouter>
       {/* <Header /> */}
      {/* <Contents/> */}
      {/* <Card/> */}
     {/* <Login/> */}
     
      
       
    </div>
  );
}

export default App;
