import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    //la lógica antes del return
    return (
      <div className="cart-widget">
        <div className="qty-display">0</div>
        <FontAwesomeIcon icon={faKeyboard} size="2x" color="white" />
      </div>
    );
    };
    
export default CartWidget;