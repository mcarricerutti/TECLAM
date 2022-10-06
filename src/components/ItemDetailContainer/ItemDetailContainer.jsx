import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { products } from '../mock/productsMock';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const traerProducto = () => {
            return new Promise((res) => {
                const producto = products.find((prod) => prod.id === 2);

                setTimeout(() => {
                    res(producto);
                }, 2000);
            });
        };
        traerProducto()
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="item-list-container">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;