import React from "react";
import CardAdmin from "../../../Organism/CardAmin/CardAdmin";
import Add from "../../../../assets/iconos/boton-agregar.png";
import BarBuscador from "../../../Organism/BarBuscador/BarBuscador";
import Footer from "../../../Templates/Footer/Footer";
import './HomeAdministrador.css'; // Import the new CSS file

const HomeAdministrador = () => {
    return (
        <>
            <BarBuscador />
            <div className="cards-container">
                <CardAdmin src={Add} nombre={"Ver mas..."} Titulo={"Agregar Productos"} link="/agregar-productos" />
                <CardAdmin src={Add} nombre={"Ver mas..."} Titulo={"Ver Productos"} link="/agregar-productos" />
                <CardAdmin src={Add} nombre={"Ver mas..."} Titulo={"Ver Ventas"} link="/agregar-productos" />
            </div>
            <Footer />
        </>
    );
};

export default HomeAdministrador;
