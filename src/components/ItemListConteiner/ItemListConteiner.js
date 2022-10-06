import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../mock/productsMock";
import "bootstrap/dist/css/bootstrap.min.css";


const ItemListContainer = ({ title }) => {
  const [data, setData] = useState([]);

    useEffect(() => {
        const traerTeclados = () => {
            return new Promise ((res) => {
                setTimeout(() => {
                    res(products);
                }, 2000);
            });
        };
        traerTeclados()
        .then ((res) => {
            setData(res);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);


    return (
      <>
      <section>
        <div className="contenedorItemList">
          <article className="contenedorTextos">
            <h1>{title}</h1>
            <p>
              ¡Permite que Teclam te acompañe mientras haces magia!
               Vení a conocer los
              mejores teclados del inframundo.
            </p>
            <button className='comprar'>Comprar</button>
          </article>
        </div>
      </section>

      <ItemList data={data} />
    </>
   
    );
  };
  
  export default ItemListContainer;