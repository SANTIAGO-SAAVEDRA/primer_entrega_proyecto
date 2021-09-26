import React from 'react'
import { ItemDetailContainer } from '../ItemDetailContainer'

export const ItemDetail = () => {
    return (
        <>
        <div>
            <img src={prooducto.img} alt="imagen"/>
            <h1>
                {producto.nombre}
            </h1>
            <h2>
                {producto.precio}
            </h2>
            <h3>{producto.category}</h3>
        </div>
        </>
    )
}
