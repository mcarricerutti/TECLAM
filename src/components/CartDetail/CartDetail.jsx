import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartDetail = () => {
    const { cart, deleteAll } = useContext(CartContext);

    return (
        <div className='containerGeneCarrito'>
            {cart.map((prod) => (
                <div className='contCarrito' key={prod.id}>
                    <img src={prod.image} alt={prod.title} className="imgCarrito" />
                    <div className="contDatosCarrito">
                        <h2 className='textCarrito'>{prod.title}</h2>
                        <h3 className='textCarrito'>US ${prod.precio}</h3>
                        <h3 className='textCarrito'>Cantidad: {prod.cantidad}</h3>
                        <h3 className='textCarrito'>Subtotal: US ${prod.precio * prod.cantidad}</h3>
                    </div>
                    <button className='btnEliminarProd'>🗑</button>
                </div>
            ))}
            <h2 className='totalCarrito'>Total: US $</h2>
            <button className='btnEliminarTodoCarri' onClick={deleteAll}>Eliminar todo el carrito</button>
        </div>
    );
};

export default CartDetail;