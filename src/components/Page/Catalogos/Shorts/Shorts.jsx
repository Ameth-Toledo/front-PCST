import React from "react";
import CardsHome from "../../../Organism/CardsHome/CardsHome";
import BarBuscador from "../../../Organism/BarBuscador/BarBuscador";
import Footer from "../../../Templates/Footer/Footer";
import camisa1 from "../../../../assets/shorts/shorsotee.jpeg";
import camisa2 from "../../../../assets/shorts/short-hombre.jpeg";
import camisa3 from "../../../../assets/shorts/Short1.jpeg";
import camisa4 from "../../../../assets/shorts/Short2.jpeg";
import camisa5 from "../../../../assets/shorts/Short3.jpeg";
import camisa6 from "../../../../assets/shorts/Short4.jpeg";
import camisa7 from "../../../../assets/shorts/Short5.jpeg";
import camisa8 from "../../../../assets/shorts/Short6.jpeg";
import camisa9 from "../../../../assets/shorts/Short7.jpeg";
import camisa10 from "../../../../assets/shorts/Short8.jpeg";
import camisa11 from "../../../../assets/shorts/Shortsss.jpeg";
import '../Camisas/Camisas.css'

const Shorts = () => {
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

export default Shorts;
