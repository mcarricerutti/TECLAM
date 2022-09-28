import React from "react";
import "./styles/ItemListContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Traigo el titulo de App.js
const ItemListContainer = ({ title }) => {

    //la lógica antes del return
    return (
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
    );
  };
  
  export default ItemListContainer;