import React from "react";
import { useNavigate } from 'react-router-dom'; 
import './CardAdmin.css';

const CardAdmin = ({ Titulo, src, alt, parrafo, nombre, link }) => {
    const navigate = useNavigate(); 

    const RedictClick = () => {
        if (link) {
            navigate(link); 
        }
    };

    return (
        <div className="card-admin">
            <h1 className="titulo-admin">{Titulo}</h1>
            <img src={src} alt={alt} className="img-admin" />
            <p className="parrafo-admin">{parrafo}</p>
            <button className="button-admin" onClick={RedictClick}>{nombre}</button>
        </div>
    );
}

export default CardAdmin;
