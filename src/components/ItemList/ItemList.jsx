import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ data }) => {
    return (
        <div className="item-list">
            {data.map((prod) => {
                return <Item prod={prod} key={prod.id} />;
            })}
        </div>
    );
};

export default ItemList;