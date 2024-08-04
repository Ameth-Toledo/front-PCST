import React from "react";
import BarBuscador from "../../Organism/BarBuscador/BarBuscador";
import Footer from "../../Templates/Footer/Footer";
import CardDelivery from "../../Organism/CardDelivery/CardDelivery";
import './Delivery.css';

const productos = [
    {
        nombre: "Camisa Azul",
        id: "12345",
        talla: "L",
        color: "Azul",
        precio: 29.99,
        imagen: "https://via.placeholder.com/300"
    },
    {
        nombre: "Pantalones Negros",
        id: "67890",
        talla: "M",
        color: "Negro",
        precio: 49.99,
        imagen: "https://via.placeholder.com/300"
    }
];

const Delivery = () => {
    return (
        <>
            <BarBuscador />
            <div className="delivery-container">
                {productos.map((producto, index) => (
                    <CardDelivery
                        key={index}
                        nombre={producto.nombre}
                        id={producto.id}
                        talla={producto.talla}
                        color={producto.color}
                        precio={producto.precio}
                        imagen={producto.imagen}
                    />
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Delivery;
