import React from "react";
import BarBuscador from "../../../Organism/BarBuscador/BarBuscador";
import CardProductos from "../../../Organism/CardProductos/CardProductos";
import Footer from "../../../Templates/Footer/Footer";
import './VerProductos.css';

const VerProductos = () => {
    return (
        <div className="ver-productos-container">
            <BarBuscador/>
            <div className="card-productos-container">
                <CardProductos/>
                <CardProductos/>
                <CardProductos/>
                <CardProductos/>
                <CardProductos/>
                <CardProductos/>
                <CardProductos/>
                <CardProductos/>
                <CardProductos/>
                <CardProductos/>
                <CardProductos/>

            </div>
            <Footer/>
        </div>
    );
}

export default VerProductos;
