import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Nav from './assets/components/nav'
import Footer from './assets/components/footer'
import Cart from './assets/routes/Cart'

import { BrowserRouter as router, Routes, Route ,Link} from "react-router-dom";

function App() {

    const [products,setProducts] =useState([])
  const url= `https://fakestoreapi.com/products?limit=20`
  const [cart,setCart]=useState([])
  const [qty,SetQty]=useState(0)


  const getData = async () => {
    try {
      const res = await axios.get(url);
      setProducts(res.data)
    } catch (error) {
     console.log(error)
    }
  };
 const addToCart=(name,price,quantity,img)=>{
 setCart(previous => [...previous, {title:name,
                                    price:price, 
                                    quantity:quantity,
                                    img:img}])
setTimeout(() => {
   console.log(cart)
}, 1000);

 }
  useEffect(() => {
 getData();
  },[]);

  
  return (
    <>
    <Nav cart={cart}/>

       <div className="main">
   
           {products.map((item) => (
             <div className="product-item" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
              <div className="image-container">
                 <img src={item.image} alt="item"  />
              </div>
                 <div className="controls">
                  <label htmlFor="input" >Quantity: </label>
                  {/* <input onChange={(e)=>SetQty(Number(e.target.value))} maxLength="2" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}/> */}
                  <input type="number" onChange={(e)=>SetQty(Number(e.target.value)) } min="1" max="5"  maxLength="2" placeholder="1"/>
                  <button onClick={()=>addToCart(item.title,item.price,qty,item.image)}>Add to Cart</button>
                 </div>
             </div>
            ))}
            
</div> 
{/* <Products products={products} SetQty={SetQty} addToCart={addToCart} qty={qty}/> */}
<Footer/>
    </>
  )
}

export default App
