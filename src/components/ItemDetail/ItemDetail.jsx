import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ item }) => {
    const [unidades, setUnidades] = useState(0);

    const {addToCart, getProductQuantity} = useContext(CartContext);

    const aggUnidades = (numero) =>{
        setUnidades(numero);
        addToCart(item,numero);
        toast.success(numero === 1 ? `Agregaste ${numero} producto en tu carrito`:`Agregaste ${numero} productos en tu carrito`);
    };

    const quantity = getProductQuantity(item.id)

    return (
        <>
        <ToastContainer />
        <div className="container contDetail">
            <div className="row">
                <div className="col-lg-5">
                    <img src={item.image} alt={item.title} className="imgDetail" />
                </div>
                
                <div className="col-lg-7">
                <h2 className="titleDetail">{item.title}</h2>
                <p>{item.description}</p>
                <p>US ${item.precio}</p>

                {
                    unidades === 0 
                    ? <ItemCount aggUnidades={aggUnidades} stock={item.stock}
                    initial={quantity}/>
                    :<Link to="/cart" className="btnIrCarrito" >Ir al carrito</Link>
                }
                

                </div>
            </div>
        </div>
        </>
    );
};

export default ItemDetail;