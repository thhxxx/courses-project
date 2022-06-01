import React from 'react';
import {Link} from "react-router-dom";

const CartElement = () => {
  return (
    <Link to="/cart">
      <button className="button">
        <i className="fa-solid fa-cart-shopping"/>
      </button>
    </Link>
  );
};

export default CartElement;