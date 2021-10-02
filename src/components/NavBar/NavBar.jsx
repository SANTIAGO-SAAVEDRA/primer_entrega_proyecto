import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { Title } from "../Title/Title";
import './NavBar.css'

const NavBar = () => {
    return <React.Fragment>
        <Container>
            <NavBar.Brand href="#home"><Title /></NavBar.Brand>
            <nav className="barraNav contenedor">

                <Link to="/category/terror">
                    <Nav.Link href="/terror">TERROR</Nav.Link>
                </Link>

                <Link to="/juvenil">
                    <Nav.Link href="/juvenil">juvenil</Nav.Link>
                </Link>

                <Link to="/home">
                    <Nav.Link href="/home">HOME</Nav.Link>
                </Link>

                <Link to="/envios">
                    <Nav.Link href="/envios">ENVIOS</Nav.Link>
                </Link>

                <Link to="/nosotros">
                    <Nav.Link href="/nosotros">NOSOTROS</Nav.Link>
                </Link>

                <Link to="/contacto">
                    <Nav.Link href="/">CONTACTO</Nav.Link>
                </Link>

            </nav>

            <Link to="/cart">
                <CartWidget />
            </Link>
        </Container>
    </React.Fragment>
}


export default NavBar;