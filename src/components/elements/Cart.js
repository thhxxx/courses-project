import React from 'react';
import {Link} from "react-router-dom";

const Cart = () => {
    return (
        <button className="button">
            <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"/>
            </Link>
        </button>
    );
};

export default Cart;