import React, { useState } from 'react';
import { CartContextUse } from '../../context/CartContext';
import ItemCount from '../ItemCount'

const ItemDetail = ({item}) => {
    const [cambiarBoton, setCambiarBoton] = useState(true)

    const { addItem, clear } = CartContextUse();
    const onAdd = (cant) => {
        addItem(item, cant)
        console.log(cant);
        setCambiarBoton();
    }

    return(
        <React.Fragment>
            <h2>{item.id}</h2>
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
            <img src={item.img} alt=" " />     
            {
                cambiarBoton ?
                <ItemCount initial={1} stock={5} onAdd={onAdd} />
                :
                <React.Fragment>
                    <Link to="/cart">
                        <button>TERMINAR COMPRA</button>
                    </Link>
                    <button onClick={clear}>VACIAR CARRITO</button>
                    {cart.map((element) => {
                        return (
                            <React.Fragment>
                                {element.item.name}
                                <button onClick={() => removeItem(element.item.id)}>x</button>
                            </React.Fragment>
                        )
                    })}
                </React.Fragment>
            }   
        </React.Fragment>
    )
}

export default ItemDetail;