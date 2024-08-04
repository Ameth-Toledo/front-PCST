import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CatalagoMujeres from './components/Page/CatalagoHombres/CatalogoMujeres.jsx'
import CatalagoHombres from './components/Page/CatalagoMujeres/CatalagoHombres.jsx'
import FormAgregarProducto from './components/Page/Administrador/FormAgregarProducto/FormAgregarProducto.jsx'
import Login from './components/Page/Login/Login.jsx'
import CarritoCompras from './components/Page/Carrito/CarritoCompras.jsx'
import Camisas from './components/Page/Catalogos/Camisas/Camisas.jsx'
import Playeras from './components/Page/Catalogos/Playeras/Playeras.jsx'
import Shorts from './components/Page/Catalogos/Shorts/Shorts.jsx'
import Pantalones from './components/Page/Catalogos/Pantalones/Pantalones.jsx'
import HomeAdministrador from './components/Page/Administrador/Home/HomeAdministrador.jsx'
import VerProductos from './components/Page/Administrador/VerProductos/VerProductos.jsx'
import Ventas from './components/Page/Administrador/Ventas/Ventas.jsx'
import Delivery from './components/Page/Delivery/Delivery.jsx'

const router=createBrowserRouter ([
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/catalagos-mujeres',
      element: <CatalagoMujeres/>
    },
    {
      path: '/catalagos-hombres',
      element: <CatalagoHombres/>
    },
    {
      path: '/agregar-productos',
      element: <FormAgregarProducto/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/carrito-compras',
      element: <CarritoCompras/>
    },
    {
      path: '/catalogo-camisas',
      element: <Camisas/>
    },
    {
      path: '/catalago-playeras',
      element: <Playeras/>
    },
    {
      path: '/catalago-shorts',
      element: <Shorts/>
    },
    {
      path: '/catalago-pantalones',
      element: <Pantalones/>
    },
    {
      path: '/home-administrador',
      element: <HomeAdministrador/>
    },
    {
      path: '/ver-productos',
      element: <VerProductos/>
    },
    {
      path: '/ventas',
      element: <Ventas/>
    },
    {
      path: '/delivery',
      element: <Delivery/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
