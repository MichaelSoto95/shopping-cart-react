import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Nav from "./assets/components/nav";
import Footer from "./assets/components/footer";
import Cart from "./assets/routes/Cart";
import Product from "./Product";
import { BrowserRouter as router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const url = `https://fakestoreapi.com/products?limit=20`;
  const [cart, setCart] = useState([]);
  const [qty, SetQty] = useState(0);

  const getData = async () => {
    try {
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addToCart = (name, price, quantity, img) => {
    setCart((previous) => [
      ...previous,
      { title: name, price: price, quantity: quantity, img: img },
    ]);
    setTimeout(() => {
      console.log(cart);
    }, 1000);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Nav cart={cart} />
      <div className="main">
        {products.map((prod) => {
          return (
            <Product
              {...prod}
              SetQty={SetQty}
              addToCart={addToCart}
              qty={qty}
              key={prod.id}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;
