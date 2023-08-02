import React from 'react'
import './App.css'
const Products = (props) => {
  return (
 <div className="main">
           {props.products.map((item) => (
             <div className="product-item" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</p>
              <div className="image-container">
                 <img src={item.image} alt="item"  />
              </div>
                 <div className="controls">
                  <label htmlFor="input" >Quantity: </label>
                  {/* <input onChange={(e)=>SetQty(Number(e.target.value))} maxLength="2" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}/> */}
                  <input type="number" onChange={(e)=>props.SetQty(Number(e.target.value)) } min="1" max="5"  maxLength="2" placeholder="1"/>
                  <button onClick={()=>props.addToCart(item.title,item.price,props.qty,item.image)}>Add to Cart</button>
                 </div>
             </div>
            ))}    
</div> 
  )
}

export default Products