import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import BarBuscador from "../../../Organism/BarBuscador/BarBuscador";
import Footer from "../../../Templates/Footer/Footer";
import './Ventas.css';

const data = [
    { name: 'Ene', ventas: 4000 },
    { name: 'Feb', ventas: 3000 },
    { name: 'Mar', ventas: 2000 },
    { name: 'Abr', ventas: 2780 },
    { name: 'May', ventas: 1890 },
    { name: 'Jun', ventas: 2390 },
    { name: 'Jul', ventas: 3490 },
];

const productosVendidos = [
    { id: 1, nombre: 'Producto 1', cantidad: 50 },
    { id: 2, nombre: 'Producto 2', cantidad: 30 },
    { id: 3, nombre: 'Producto 3', cantidad: 20 },
    { id: 4, nombre: 'Producto 4', cantidad: 15 },
];

const Ventas = () => {
    return (
        <div className="ventas-container">
            <BarBuscador />
            
            <div className="ventas-report">
                <div className="ventas-grafica">
                    <h2>Reporte de Ventas</h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="ventas" stroke="#00aaff" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                
                <div className="productos-vendidos">
                    <h2>Productos Vendidos</h2>
                    <ul>
                        {productosVendidos.map(producto => (
                            <li key={producto.id}>
                                {producto.nombre} - Cantidad: {producto.cantidad}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default Ventas;
