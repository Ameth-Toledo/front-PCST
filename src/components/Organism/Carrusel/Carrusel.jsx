import React from "react";
import banner from '../../../assets/carrusel/ban5.jpg';
import banner1 from '../../../assets/carrusel/ban1.jpg';
import banner2 from "../../../assets/carrusel/ban2.jpg"
import banner3 from "../../../assets/carrusel/ban3.jpg";
import banner4 from "../../../assets/carrusel/ban4.jpg";
import useCarrusel from "./carrusel";
import "./Carrusel.css";

const Carrusel = () => {
    const images = [banner, banner2, banner1, banner3, banner4];
    const currentIndex = useCarrusel(images);

    return (
        <div className="carrusel">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={index === currentIndex ? "slide active" : "slide"}
                >
                    <img src={image} alt={`Slide ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Carrusel;
