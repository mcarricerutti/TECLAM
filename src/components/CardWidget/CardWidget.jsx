import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
  const {totalProducts} = useContext(CartContext);


    return (
      <div className="cart-widget">
        <span className="qty-display">{totalProducts()}</span>
        <FontAwesomeIcon icon={faKeyboard} size="2x" color="white" />
      </div>
    );
    };
    
export default CartWidget;

