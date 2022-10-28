import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from "../../services/firebaseConfig";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

    const {prodName} = useParams();

    useEffect(() => {

        const collectionProd = collection(db, 'productos');

        const seleccionProd = prodName
            ? query(
                collection(db, 'productos'),
                where('category', '==', prodName))
            : collectionProd;
        
        getDocs(seleccionProd)
           .then((res) => {
            const products = res.docs.map((prod) => {
                return{
                    id: prod.id,
                    ...prod.data(),
                };
            });
            setItems(products);
           })
           .catch((error) => {
            console.log(error);
           })
           .finally(() =>{
            setLoading(false)
        })

        return() => setLoading(true);

    }, [prodName]);


    if(loading){
        return (
            <div className="spinner"> 
                <DotSpinner color='yellow' />
            </div>
        )
    }


    return (
    <ItemList  items={items} /> 
    );
  }
  
  export default ItemListContainer