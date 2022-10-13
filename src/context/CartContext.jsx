import { createContext, useState} from "react"

export const CartContext = createContext()


const Provider = (props) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad) =>{

     const producto = {...item, cantidad};
        if(isInCart(producto.id)){
            //sumo la cantidad
        }else{
            setCart([...cart,producto]);
        }
    };

    const isInCart = (id) => cart.some((prod) => prod.id === id);

    const deleteAll = () => setCart([]);

    //const borrar un solo producto
    //const sumar cantidad total de unidades
    //sumar precio total

    return(
        <CartContext.Provider value={{cart, addToCart, deleteAll}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default Provider;