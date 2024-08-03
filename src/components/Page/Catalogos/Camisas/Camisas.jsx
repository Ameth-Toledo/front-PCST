import React from "react";
import CardsHome from "../../../Organism/CardsHome/CardsHome";
import BarBuscador from "../../../Organism/BarBuscador/BarBuscador";
import Footer from "../../../Templates/Footer/Footer";
import camisa1 from "../../../../assets/camisas/camisa-hombre.jpg";
import camisa2 from "../../../../assets/camisas/camisas1.jpeg.jpeg";
import camisa3 from "../../../../assets/camisas/Camisas2.jpeg";
import camisa4 from "../../../../assets/camisas/Camisas3.jpeg";
import camisa5 from "../../../../assets/camisas/Camisas4.jpeg";
import camisa6 from "../../../../assets/camisas/Camisas5.jpeg";
import camisa7 from "../../../../assets/camisas/Camisas6.jpeg";
import camisa8 from "../../../../assets/camisas/Camisas7.jpeg";
import camisa9 from "../../../../assets/camisas/Camisasu8.jpeg";
import camisa10 from "../../../../assets/camisas/Camisetasss.jpg";
import camisa11 from "../../../../assets/camisas/Camisoss.jpeg";

const Camisas = () => {
    return (
        <>
            <BarBuscador />
            <div className="cards-container">
                <CardsHome link="/carrito-compras" src={camisa1} descripcion={"Camisa de cuadritos"} precio={"$ 950.00"}/>
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

export default Camisas;
