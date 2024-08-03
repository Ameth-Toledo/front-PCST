import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import banner from "../../../assets/banners/banner1.jpg";
import banner2 from "../../../assets/banners/banner2.jpg";
import banner3 from "../../../assets/banners/banner3.jpg";
import banner4 from "../../../assets/banners/banner4.jpg";
import banner5 from "../../../assets/banners/banner5.jpg";
import './Informacion.css';

const Informacion = ({Titulo, descripcion, puntoNegocio1, puntoNegocio2, puntoNegocio3, puntoNegocio4, puntoNegocio5}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div className={`info-container ${isExpanded ? 'expanded' : ''}`}>
            <div className="info-header" onClick={toggleExpand}>
                <h2 className="info-title">
                    <FontAwesomeIcon icon={faInfoCircle} className="info-icon" /> {Titulo}
                </h2>
            </div>
            <div className="info-content">
                <div className="info-carousel">
                    <div className="carousel-wrapper">
                        <img src={banner} alt="Imagen 1" className="carousel-image" />
                        <img src={banner2} alt="Imagen 2" className="carousel-image" />
                        <img src={banner3} alt="Imagen 3" className="carousel-image" />
                        <img src={banner4} alt="Imagen 4" className="carousel-image" />
                        <img src={banner5} alt="Imagen 5" className="carousel-image" />
                    </div>
                </div>
                <div className="info-description">
                    <p>{descripcion}</p>
                </div>
                <div className="info-points">
                    <div className="point">
                        <FontAwesomeIcon icon={faCheckCircle} className="point-icon" />
                        <span>{puntoNegocio1}</span>
                    </div>
                    <div className="point">
                        <FontAwesomeIcon icon={faCheckCircle} className="point-icon" />
                        <span>{puntoNegocio2}</span>
                    </div>
                    <div className="point">
                        <FontAwesomeIcon icon={faCheckCircle} className="point-icon" />
                        <span>{puntoNegocio3}</span>
                    </div>
                    <div className="point">
                        <FontAwesomeIcon icon={faCheckCircle} className="point-icon" />
                        <span>{puntoNegocio4}</span>
                    </div>
                    <div className="point">
                        <FontAwesomeIcon icon={faCheckCircle} className="point-icon" />
                        <span>{puntoNegocio5}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Informacion;
