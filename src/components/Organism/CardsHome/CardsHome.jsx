import React from "react";
import { useNavigate } from 'react-router-dom'; 
import './CardsHome.css';

function CardsHome({ src, nombreProducto, descripcion, precio, link }) {
    const navigate = useNavigate(); 

    const handleClick = () => {
        if (link) {
            navigate(link); 
        }
    };

    return (
        <div className="card-home">
            <img src={src} alt="Product" className="card-image-home" />
            <div className="card-content-home">
                <h2 className="card-title-home">{nombreProducto}</h2>
                <p className="card-description-home">{descripcion}</p>
                <p className="card-price-home">{precio}</p>
                <button className="card-button-home" onClick={handleClick}>Comprar</button>
            </div>
        </div>
    );
}

export default CardsHome;
