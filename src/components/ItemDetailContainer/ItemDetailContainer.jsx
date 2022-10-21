import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { DotSpinner } from '@uiball/loaders'
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const collectionProd = collection(db, 'productos');
        const ref = doc(collectionProd, id);

        getDoc(ref)
            .then((res) => {
                //console.log(res);
                setItem({
                    id: res.id,
                    ...res.data(),
                });
            })
            .catch((error) => {
            console.log(error);
            })
            .finally(() =>{
                setLoading(false)
            });

        return() => setLoading(true);

    }, [id]);


    if(loading){
        return (
            <div className="spinner"> 
                <DotSpinner color='yellow'/>
            </div>
        )
    }


    return (
        <div className="item-list-container">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;