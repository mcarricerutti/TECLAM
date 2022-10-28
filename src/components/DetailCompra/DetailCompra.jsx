import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const DetailCompra = () => {

    const { cart, totalPrice} = useContext(CartContext);

    return (
        <div className='contDetaCompra'>
            <p className='titleDetailCompra'>DETALLE DE COMPRA</p>
            {cart.map((prod) => (
                <div className='contCarrito' key={prod.id}>
                    <img src={prod.image} alt={prod.title} className="imgCarrito" />
                    <div className="contDatosCarrito">
                        <h2 className='textCarrito'>{prod.title}</h2>
                        <h3 className='textCarrito'>US ${prod.precio}</h3>
                        <h3 className='textCarrito'>Cantidad: {prod.cantidad}</h3>
                        <h3 className='textCarrito'>Subtotal: US ${prod.precio * prod.cantidad}</h3>
                    </div>
                </div>
            ))}
            <h2 className='totalDetailCompra'>Total: US ${totalPrice()}</h2>
        </div>
    );

}

export default DetailCompra;