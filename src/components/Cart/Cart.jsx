import CartDetail from "../CartDetail/CartDetail";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart } = useContext(CartContext);

    if(cart.length === 0){
        return(
            <>
            <p className="textCarriVacio">Tu carrito está vacío(0)</p>
            <Link className="btnIrComrprar" to="/products">Ir a comprar!</Link>
            </>
        );
    }

    return(
        <CartDetail/>
    )
}

export default Cart;