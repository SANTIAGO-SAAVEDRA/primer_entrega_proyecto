import React, { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState (initial)

    function sumar(){
        if(count<stock)setCount(count++)
    }

    function restar(){
        if(count>1){
            setCount(count--)
        }
    }

    const agregarCarrito=() => {
        onAdd(count)
    }

    return(
        <div>
            <h3>{count}</h3>
            <button onClick={sumar}>+</button>
            <label>{count}</label>
            <button onClick={restar}>-</button>
            <br/>
            {cambiarBoton ?
            <button onClick={agregarCarrito}>Agregar al carrito</button>
        :
        <div>
            <Link to="/cart">
            <button>Finalizar compra</button>
            </Link>

            <Link to="/">
            <button>Seguir con la compra</button>
            </Link>
        </div>
        }
        
        </div>
    )
}

export default ItemCount;