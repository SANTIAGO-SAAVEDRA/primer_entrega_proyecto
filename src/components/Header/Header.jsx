import React from 'react'

import CartWidget from '../CartWidget/CartWidget'

const Header = () => {
    return (
        <>
            <h1 className="title">
                <a href="/">e-commerce Saavedra</a>
            </h1>
            <span>
                    <a href="/carrito"><CartWidget/></a>
            </span>
        </>
    )
}

export default Header;
