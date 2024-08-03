import React from "react";
import CardsHome from "../../../Organism/CardsHome/CardsHome";
import BarBuscador from "../../../Organism/BarBuscador/BarBuscador";
import Footer from "../../../Templates/Footer/Footer";
import camisa1 from "../../../../assets/playeras/playera-hombre.png";
import camisa2 from "../../../../assets/playeras/Playeras1.jpeg";
import camisa3 from "../../../../assets/playeras/Playeras2.jpeg";
import camisa4 from "../../../../assets/playeras/Playeras3.jpeg";
import camisa5 from "../../../../assets/playeras/Playeras4.jpeg";
import camisa6 from "../../../../assets/playeras/Playeras5.jpeg";
import camisa7 from "../../../../assets/playeras/Playeras6.jpeg";
import camisa8 from "../../../../assets/playeras/Playeras8.jpeg";
import camisa9 from "../../../../assets/playeras/Playerotaa.jpeg";
import camisa10 from "../../../../assets/playeras/Playeras10.jpeg";
import camisa11 from "../../../../assets/playeras/Playeras11.jpeg";
import '../Camisas/Camisas.css'

const Playeras = () => {
    return (
        <>
            <BarBuscador />
            <div className="cards-container">
                <CardsHome link="/carrito-compras" src={camisa1} descripcion={"Playera blanca"} precio={"$ 950.00"}/>
                <CardsHome link="/carrito-compras" src={camisa2} />
                <CardsHome link="/carrito-compras" src={camisa3} />
                <CardsHome link="/carrito-compras" src={camisa4} />
                <CardsHome link="/carrito-compras" src={camisa5} />
                <CardsHome link="/carrito-compras" src={camisa6} />
                <CardsHome link="/carrito-compras" src={camisa7} />
                <CardsHome link="/carrito-compras" src={camisa8} />
                <CardsHome link="/carrito-compras" src={camisa9} />
                <CardsHome link="/carrito-compras" src={camisa10} />
                <CardsHome link="/carrito-compras" src={camisa11} />
            </div>
            <Footer />
        </>
    );
};

export default Playeras;
