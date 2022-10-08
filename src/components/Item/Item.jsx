import { Link } from "react-router-dom";

const Item = ({ prod }) => {
    return (
        <div className="card">
            <img src={prod.image} alt={prod.title} className="imgProductos" />
            <div className="card-info">
                <h2 className='prodName'>{prod.title}</h2>
                <h4 className='prodPrice'>{prod.precio}</h4>
                <Link className='btnDetalle' to={`/item/${prod.id}`}>Ver Detalle</Link>
           </div>
        </div>
    );
};

export default Item;