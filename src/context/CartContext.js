import {createContext, useContext, useState} from 'react';

const CartContext = createContext()

export const CartContextUse = () => {
    return useContext(CartContext)
}


export default function CartContextProvider ({children}){

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(IsInCart(item.id)) {
            const updateQty = [...cart];

            updateQty.map(element => {
                if(element.item.id === item.id) {
                    element.quantity+= quantity;
                }
            })
            setCart(updateQty);
        }else {
            setCart([...cart, {item, quantity}])
        }

    }
    const vaciarCarrito=()=>{
        setCart([]);
    }

    const iconCart = () => {
        return setCart.reduce( (acum, valor) => acum + valor.quantity, 0)
    }


    const IsInCart = (id) => cart.find(element => element.item.id === id)

    const clear = () => setCart([])

    const removeItem = (id) => {
        const cartFilter = cart.filter(element => element.item.id !== id);
        setCart(cartFilter)
    }

    return (
        <CartContext.Provider value={cart, addItem, clear, removeItem, vaciarCarrito}>
            {children}
        </CartContext.Provider>
    )
}