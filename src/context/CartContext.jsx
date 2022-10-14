import { createContext, useState} from "react"

export const CartContext = createContext()


const Provider = (props) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad) =>{
    let newCart;
    let product = cart.find(product => product.id === item.id);
     if(product){
        product.cantidad += cantidad;
        newCart = [...cart];
     }else{
        product = {...item, cantidad};
        newCart = [...cart, product];
     }
     setCart(newCart)
    }

    const deleteAll = () => setCart([]);

    const deleteItem = (id) => setCart(cart.filter(product => product.id !== id));

    const totalPrice = () => {
        return cart.reduce((acumulador, preActual) => acumulador + preActual.cantidad * preActual.precio, 0);
    };

    const totalProducts = () => {
        return cart.reduce((acumulador, actual) => acumulador + actual.cantidad, 0)
    }

    return(
        <CartContext.Provider value={{cart, addToCart, deleteAll, deleteItem, totalPrice, totalProducts}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default Provider;