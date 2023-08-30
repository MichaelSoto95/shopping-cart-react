import React from "react";

const Product = (props) => {
  const { title, price, image, SetQty, addToCart, qty, id } = props;
  return (
    <div className="product-item" key={id}>
      <h3>{title}</h3>
      <p>
        {price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <div className="image-container">
        <img src={image} alt="item" />
      </div>
      <div className="controls">
        <label htmlFor="input">Quantity: </label>
        {/* <input onChange={(e)=>SetQty(Number(e.target.value))} maxLength="2" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}/> */}
        <input
          type="number"
          onChange={(e) => SetQty(Number(e.target.value))}
          min="1"
          max="5"
          maxLength="2"
          placeholder="1"
        />
        <button onClick={() => addToCart(title, price, qty, image)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
