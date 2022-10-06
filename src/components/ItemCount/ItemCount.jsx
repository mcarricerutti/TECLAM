import { Button } from "react-bootstrap";
import React, { useState } from 'react';

const ItemCount = (props) => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () =>{
      if(counter < props.stock){
        setCounter(counter +1)
      }else if(props.stock === 0){

      }
    }
    const decrementCounter = () => {
    if(counter > 0) {
      setCounter (counter -1);
    }
    }

    const handleOnAdd = () => {
      if(props.stock !== 0){
        console.log("Productos agregados: " + (counter) );
      }
    }
  
    return (
        <div className='container cardContador'>
          <div className="row">
            <div className="col-lg-6">
              <div className="container contSimbolos">
                <div className="row">
                  <div className="col-lg-4">
                    <button onClick={decrementCounter} className="btnContador contResta" >-</button>
                  </div>
                  <div className="col-lg-4">
                    <button className="btnContador ">{counter}</button>
                  </div>
                  <div className="col-lg-4">
                    <button onClick={incrementCounter} className="btnContador contSuma" >+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <button onClick={handleOnAdd} className="btnAggCarrito" >Agregar al carrito</button>
            </div>
          </div>
        </div>
    );
  }
  
  export default ItemCount;