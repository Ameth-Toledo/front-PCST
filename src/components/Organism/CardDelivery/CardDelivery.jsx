import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import './CardDelivery.css';

const CardDelivery = ({ nombre, id, talla, color, precio, imagen }) => {
    const [completado, setCompletado] = useState(false);

    const handleToggle = () => {
        setCompletado(!completado);
    };

    return (
        <div className="card-delivery">
            <img src={imagen} alt={nombre} className="card-delivery-imagen" />
            <div className="card-delivery-contenido">
                <h2 className="card-delivery-nombre">{nombre}</h2>
                <p className="card-delivery-id">ID: {id}</p>
                <p className="card-delivery-talla">Talla: {talla}</p>
                <p className="card-delivery-color">Color: {color}</p>
                <p className="card-delivery-precio">Precio: ${precio.toFixed(2)}</p>
                <button 
                    className={`card-delivery-boton ${completado ? 'completado' : 'pendiente'}`} 
                    onClick={handleToggle}
                >
                    <FontAwesomeIcon icon={completado ? faCheckCircle : faCircle} />
                    {completado ? ' Completado' : ' Marcar Completado'}
                </button>
            </div>
        </div>
    );
};

export default CardDelivery;
