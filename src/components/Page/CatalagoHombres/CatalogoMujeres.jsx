import React from "react";
import CardsHome from "../../Organism/CardsHome/CardsHome";
import BarBuscador from "../../Organism/BarBuscador/BarBuscador";
import BlusaNegra from "../../../assets/damas/dama-blusa-negra.jpg";
import PantalonNegro from "../../../assets/caballeros/hombre-pantalon-negrao.jpg";
import Short from "../../../assets/shorts/short-hombre.jpeg";
import Camisa from "../../../assets/camisas/camisa-hombre.jpg";
import Playera from "../../../assets/playeras/playera-hombre.png";
import './CatalagoMujeres.css';

function CatalagoMujeres() {
    return (
        <>
            <BarBuscador />
            <div className="catalogo-mujeres-container">
                <CardsHome src={BlusaNegra} descripcion={"la blusa esta bonita"} precio={"$ 300.00"} />
                <CardsHome src={PantalonNegro} descripcion={"el pantalón está bonito"} precio={"$ 350.00"} />
                <CardsHome src={Short} descripcion={"el short está genial"} precio={"$ 200.00"} />
                <CardsHome src={Camisa} descripcion={"la camisa es elegante"} precio={"$ 400.00"} />
                <CardsHome src={Playera} descripcion={"la playera es cómoda"} precio={"$ 250.00"} />
                <CardsHome src={Playera} descripcion={"la playera es cómoda"} precio={"$ 250.00"} />
                <CardsHome src={Playera} descripcion={"la playera es cómoda"} precio={"$ 250.00"} />
                <CardsHome src={Playera} descripcion={"la playera es cómoda"} precio={"$ 250.00"} />
                <CardsHome src={Playera} descripcion={"la playera es cómoda"} precio={"$ 250.00"} />
                <CardsHome src={Playera} descripcion={"la playera es cómoda"} precio={"$ 250.00"} />
            </div>
        </>
    );
}

export default CatalagoMujeres;
