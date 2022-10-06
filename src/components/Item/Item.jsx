const Item = ({ prod }) => {
    return (
        <div className="card">
            <img src={prod.image} alt={prod.title} className="imgProductos" />
            <div className="card-info">
                <h2 className='prodName'>{prod.title}</h2>
                <h4 className='prodPrice'>{prod.precio}</h4>
                <button className='btnDetalle'>Ver Detalle</button>

           </div>
        </div>
    );
};

export default Item;