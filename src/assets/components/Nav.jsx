import React from 'react'
import './nav.css'
import {FaShoppingCart} from 'react-icons/fa'
const Nav = (props) => {
   
    const scrollTop=()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    
  return (
  <div className="nav-container">
    <h1 onClick={scrollTop}>MIKES STORE</h1>
 <div className="cart-container"> 
    <FaShoppingCart  className='cart-logo'/>
    <div className='cart-lenght'>{props.cart.length}</div>
 </div>
 
  </div>
  )
}

export default Nav