import React, { useState } from "react";

function Item({name, category}) {
  const [isCart, setIsCart] = useState(false);

  function addToCart() {
    setIsCart((isCart) => !isCart);
  }

  return (
    <li className={isCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isCart ? "remove" : "add"}
        onClick={addToCart}
      >
        {isCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;