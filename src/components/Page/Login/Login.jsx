// Login.jsx

import React, { useState } from "react";
import login from "../../../assets/banners/login.jpg";
import BarBuscador from "../../Organism/BarBuscador/BarBuscador";
import Footer from "../../Templates/Footer/Footer";
import './Login.css';
import { validateLoginForm } from "./loginLogic"; // Importa la función de validación

const Login = () => {
    // Estado local para almacenar los valores de los campos de entrada
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Maneja el evento de envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario

        // Verifica los campos usando la lógica de validación
        if (validateLoginForm(email, password)) {
            // Lógica adicional para el envío del formulario
            console.log('Formulario enviado con éxito');
            // Aquí puedes agregar tu lógica para manejar la autenticación
        }
    };

    return (
        <>
            <BarBuscador />
            <div className="login-container">
                <div className="login-box">
                    <div className="login-image-half">
                        <img src={login} alt="Bazar" className="login-img" />
                    </div>
                    <div className="login-form-half">
                        <h2 className="login-heading">Iniciar Sesión</h2>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className="login-input-group">
                                <label htmlFor="email" className="login-label">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Ingresa tu correo"
                                    className="login-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
                                />
                            </div>
                            <div className="login-input-group">
                                <label htmlFor="password" className="login-label">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Ingresa tu contraseña"
                                    className="login-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
                                />
                            </div>
                            <button type="submit" className="login-submit-btn">
                                Iniciar Sesión
                            </button>
                        </form>
                        <p className="login-register-prompt">
                            ¿No tienes cuenta?{" "}
                            <a href="/register" className="login-register-link">
                                Regístrate aquí
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
