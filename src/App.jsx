import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Nav from './assets/components/nav'
import Footer from './assets/components/footer'


function App() {

    const [products,setProducts] =useState([])
  const url= `https://fakestoreapi.com/products?limit=25`
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
 const addToCart=(name,price,quantity)=>{
 setCart(previous => [...previous, {title:name,price:price, quantity:quantity}])
setTimeout(() => {
   console.log(cart)
}, 1000);

 }
  useEffect(() => {
 getData();
  },[]);

  const handleChange = event => {
    const value = Math.max(1, Math.min(10, Number(event.target.value)));
    setValue(value);
  };
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
                  <input type="number" onChange={(e)=>SetQty(Number(e.target.value))}/>
                  <button onClick={()=>addToCart(item.title,item.price,qty)}>Add to Cart</button>
                 </div>
             </div>
            ))}
</div>
<Footer/>
    </>
  )
}

export default App
