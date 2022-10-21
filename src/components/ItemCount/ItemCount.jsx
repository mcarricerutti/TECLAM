import React, { useEffect, useState } from 'react';

const ItemCount = ({stock, initial = 0, aggUnidades}) => {
    const [counter, setCounter] = useState(initial);

    const incrementCounter = () =>{
      if(counter < stock){
        setCounter(counter +1)
      }else if(stock === 0){

      }
    }
    const decrementCounter = () => {
    if(counter > 0) {
      setCounter (counter -1);
    }
    }

    useEffect(() => {
      setCounter(initial)
    }, [initial])
  
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
              <button onClick={() => aggUnidades(counter)}
              className="btnAggCarrito">Agregar al carrito</button>
            </div>
          </div>
        </div>
    );
  }
  
  export default ItemCount;