
//CartButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CartButton.css';

const CartButton = ({ cart }) => {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart');
    };

    return (
        <div className="cart-button">
            <button className="btn btn-success" onClick={handleCartClick}>
                Cart 
            </button>
        </div>
    );
};

export default CartButton;
