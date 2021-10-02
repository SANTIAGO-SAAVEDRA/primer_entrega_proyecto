import React from "react"
import { Link } from "react-router-dom"
import { CartContextUse } from "../../context/CartContext"

const Cart = ({ condition = true }) => {
    const { cartList, vaciarCarrito } = CartContextUse()

    return (
        <div>
            <h1>Hola soy cart</h1>

            {cartList.length === 0 ?

                <React.Fragment>
                    <h2>No hay productos, pruebe agregando alguno(s) a su carrito.</h2>
                    <Link to='/'>Ir a la tienda</Link>
                </React.Fragment>
                :
                cartList.map(resp => <div>
                    <h2>{resp.item.name}</h2>

                    <button onClick={() => vaciarCarrito()}>VACIAR CARRITO</button>
                </div>
                )}
        </div>
    )
}