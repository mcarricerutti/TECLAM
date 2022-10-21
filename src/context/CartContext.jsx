import { createContext, useState} from "react"

export const CartContext = createContext()


const Provider = (props) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad) => {
        const product = { ...item, cantidad };
        if (isInCart(product.id)) {
            sumandoCantidad(product);
        } else {
            setCart([...cart, product]);
        }
    };

    const sumandoCantidad = (prodAgregado) => {
        const carritoActualizado = cart.map((prodDelCart) => {
            if (prodDelCart.id === prodAgregado.id) {
                const prodActualizado = {
                    ...prodDelCart,
                    cantidad: prodAgregado.cantidad,
                };
                return prodActualizado;
            } else {
                return prodDelCart;
            }
        });

        setCart(carritoActualizado);
    };

    
    const isInCart = (id) => cart.some((prod) => prod.id === id)

    const deleteAll = () => setCart([]);

    const deleteItem = (id) => setCart(cart.filter(product => product.id !== id));

    const totalPrice = () => {
        return cart.reduce((acumulador, preActual) => acumulador + preActual.cantidad * preActual.precio, 0);
    };

    const totalProducts = () => {
        return cart.reduce((acumulador, actual) => acumulador + actual.cantidad, 0)
    }

    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id)
        return product?.cantidad
    }

    return(
        <CartContext.Provider value={{cart, addToCart, deleteAll, deleteItem, totalPrice, totalProducts, getProductQuantity}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default Provider;