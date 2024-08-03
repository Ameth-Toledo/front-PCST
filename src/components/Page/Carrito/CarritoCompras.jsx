import React, { useState, useEffect } from "react";
import BarBuscador from "../../Organism/BarBuscador/BarBuscador";
import Footer from "../../Templates/Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faTshirt, faPalette, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import './CarritoCompras.css';

const CarritoCompras = () => {
  const [amount, setAmount] = useState('');
  const [size, setSize] = useState('medium');
  const [color, setColor] = useState('blue');
  const [address, setAddress] = useState('');

  useEffect(() => {
    // Asegúrate de que el SDK esté cargado
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert('Transacción completada por ' + details.payer.name.given_name);
          });
        },
        onError: (err) => {
          console.error('Error en PayPal Checkout', err);
          alert('Ocurrió un error durante la transacción');
        }
      }).render('#paypal-button-container');
    } else {
      console.error('SDK de PayPal no cargado.');
    }
  }, [amount]);

  return (
    <>
      <BarBuscador />
      <div className="carrito-compras-container">
        <h1 className="h1-carrito">Carrito de Compras</h1>
        <div className="form-container">
          <div className="form-group">
            <label htmlFor="amount">
              <FontAwesomeIcon icon={faDollarSign} className="icon" />
              Monto del Pago:
            </label>
            <input 
              type="number" 
              id="amount" 
              name="amount" 
              min="0.01" 
              step="0.01" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faTshirt} className="icon" />
              Seleccione la Talla:
            </label>
            <div className="radio-group">
              <label>
                <input 
                  type="radio" 
                  value="large" 
                  checked={size === 'large'} 
                  onChange={() => setSize('large')} 
                />
                Grande
              </label>
              <label>
                <input 
                  type="radio" 
                  value="medium" 
                  checked={size === 'medium'} 
                  onChange={() => setSize('medium')} 
                />
                Mediana
              </label>
              <label>
                <input 
                  type="radio" 
                  value="small" 
                  checked={size === 'small'} 
                  onChange={() => setSize('small')} 
                />
                Chica
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faPalette} className="icon" />
              Elija el Color:
            </label>
            <div className="radio-group">
              <label>
                <input 
                  type="radio" 
                  value="blue" 
                  checked={color === 'blue'} 
                  onChange={() => setColor('blue')} 
                />
                Azul
              </label>
              <label>
                <input 
                  type="radio" 
                  value="black" 
                  checked={color === 'black'} 
                  onChange={() => setColor('black')} 
                />
                Negro
              </label>
              <label>
                <input 
                  type="radio" 
                  value="red" 
                  checked={color === 'red'} 
                  onChange={() => setColor('red')} 
                />
                Rojo
              </label>
              <label>
                <input 
                  type="radio" 
                  value="yellow" 
                  checked={color === 'yellow'} 
                  onChange={() => setColor('yellow')} 
                />
                Amarillo
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address">
              <FontAwesomeIcon icon={faAddressCard} className="icon" />
              Dirección:
            </label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
            />
          </div>
        </div>
        <div id="paypal-button-container" className="paypal-button-container"></div>
      </div>
      <Footer />
    </>
  );
};

export default CarritoCompras;
