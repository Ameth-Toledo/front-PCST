import React from "react";
import './CardProductos.css';

const CardProductos = ({ nombre, precio, descripcion, tipoProducto, idCategoria, idTipoProducto, imagen }) => {
    const formatoPrecio = precio && !isNaN(precio) ? precio.toFixed(2) : 'Precio no disponible';

    return (
        <div className="card-producto">
            <img src={imagen} alt={nombre} className="card-producto-imagen" />
            <div className="card-producto-contenido">
                <h2 className="card-producto-nombre">{nombre}</h2>
                <p className="card-producto-precio">${formatoPrecio}</p>
                <p className="card-producto-descripcion">{descripcion}</p>
                <p className="card-producto-tipo">Tipo de Producto: {tipoProducto}</p>
                <p className="card-producto-categoria">ID de Categoría: {idCategoria}</p>
                <p className="card-producto-tipo-producto">ID de Tipo de Producto: {idTipoProducto}</p>
            </div>
        </div>
    );
};

export default CardProductos;
