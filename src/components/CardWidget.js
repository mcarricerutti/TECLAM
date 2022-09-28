import React from "react";
import "./styles/CardWidget.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
    //la lógica antes del return
    return (
      <div className="cart-widget">
        <FontAwesomeIcon icon={faKeyboard} size="2x" color="white" />
        <div className="qty-display">0</div>
      </div>
    );
    };
    
export default CartWidget;