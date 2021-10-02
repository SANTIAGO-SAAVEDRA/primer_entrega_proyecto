import React from 'react'

import CartWidget from '../CartWidget/CartWidget'

const Header = () => {
    return (
        <React.Fragment>
            <h1 className="title">
                <a href="/">e-commerce Saavedra</a>
            </h1>
            <span>
                    <a href="/carrito"><CartWidget/></a>
            </span>
        </React.Fragment>
    )
}

export default Header;
