import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../mock/productsMock";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'


const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

    const {prodName} = useParams();

    useEffect(() => {
        const traerTeclados = () => {
            return new Promise ((res, rej) => {
                const prodFiltrados = products.filter((prod)=> prod.category === prodName);
                const prods = prodName ? prodFiltrados : products;
                setTimeout(() => {
                    res(prods);
                }, 2000);
            });
        };
        traerTeclados()
        .then ((res) => {
            setData(res);
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
    <ItemList data={data} /> 
    );
  };
  
  export default ItemListContainer;