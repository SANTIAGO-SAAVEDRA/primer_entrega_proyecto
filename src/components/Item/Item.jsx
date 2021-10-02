import React from 'react'

const Item = (producto) => {
    return (
        <div key={producto.id} className="card w-25 mt-5">

            <div className="card-header">
                <img src={producto.img} />
            </div>

            <div className="card-body">
                {producto.name}
                {producto.category}
                ${producto.price}
            </div>

            <div className="card-footer">
                <button className="btn btn-outline-primary btn-block">detalle de producto</button>
            </div>
        </div>
    )
}

export default Item;