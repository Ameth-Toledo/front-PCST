import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faFemale, faMale } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './BarBuscador.css';

function BarBuscador() {
    const [cartItemCount, setCartItemCount] = useState(0); 

    return (
        <header className="header-pc-store">
            <div className="header-left-pc-store">
                <Link to="/" className="store-name-link-pc-store">
                    <h1 className="store-name-pc-store">PCStore</h1>
                </Link>
                <input type="text" className="search-input-pc-store" placeholder="Buscar productos..." />
            </div>
            <nav className="header-center-pc-store">
                <a href="/catalagos-mujeres" className="nav-link-pc-store">
                    <FontAwesomeIcon icon={faFemale} className="nav-icon-pc-store" />
                    Mujer
                </a>
                <a href="/catalagos-hombres" className="nav-link-pc-store">
                    <FontAwesomeIcon icon={faMale} className="nav-icon-pc-store" />
                    Hombre
                </a>
            </nav>
            <div className="header-right-pc-store">
                <a href="/login" className="login-link-pc-store">Iniciar sesión</a>
                <a href="/carrito-compras" className="cart-link-pc-store" title={cartItemCount === 0 ? "Carrito vacío" : ""}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
                </a>
            </div>
        </header>
    );
}

export default BarBuscador;
