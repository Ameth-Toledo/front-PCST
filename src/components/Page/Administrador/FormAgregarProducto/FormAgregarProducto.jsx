import React, { useState } from "react";
import BarBuscador from "../../../Organism/BarBuscador/BarBuscador";
import Footer from "../../../Templates/Footer/Footer";
import Informacion from "../../../Molecules/Informacion/Informacion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faDollarSign, faFileAlt, faImage, faListAlt, faHashtag } from "@fortawesome/free-solid-svg-icons";
import { validateForm, showSuccessAlert } from "./FormAddProductosLogic";
import "./FormAgregarProducto.css";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    tipoProducto: "",
    categoriaId: "",
    tipoProductoId: "",
    imagen: null,
  });

  const handleChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData({
      ...formData,
      [id]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(formData)) {
      console.log("Form submitted:", formData);

      showSuccessAlert();

      setFormData({
        nombre: "",
        precio: "",
        descripcion: "",
        tipoProducto: "",
        categoriaId: "",
        tipoProductoId: "",
        imagen: null,
      });
    }
  };

  return (
    <div className="app-container">
      <BarBuscador />
      <div className="main-content-add">
        <Informacion
          descripcion={"Hola Paco: Aqui podras agregar nuevos productos a tu inventario, debes de llenar todos los campos para poder agregar el producto correctamente."}
          puntoNegocio1={"Pantalones"}
          puntoNegocio2={"Playeras"}
          puntoNegocio3={"Camisas"}
          puntoNegocio4={"Short"}
          puntoNegocio5={"Blusas"}
          Titulo={"Agregar Productos"}
        />
        <div className="product-form">
          <h2 className="product-form-title">Agregar Producto</h2>
          <form className="product-form-fields" onSubmit={handleSubmit}>
            <div className="product-form-field">
              <label htmlFor="nombre" className="product-form-label">
                <FontAwesomeIcon icon={faTag} className="form-icon" /> Nombre:
              </label>
              <input type="text" id="nombre" className="product-form-input" value={formData.nombre} onChange={handleChange} />
            </div>

            <div className="product-form-field">
              <label htmlFor="precio" className="product-form-label">
                <FontAwesomeIcon icon={faDollarSign} className="form-icon" /> Precio:
              </label>
              <input type="number" id="precio" className="product-form-input" value={formData.precio} onChange={handleChange} />
            </div>

            <div className="product-form-field">
              <label htmlFor="descripcion" className="product-form-label">
                <FontAwesomeIcon icon={faFileAlt} className="form-icon" /> Descripción:
              </label>
              <textarea id="descripcion" className="product-form-textarea" rows="4" value={formData.descripcion} onChange={handleChange}></textarea>
            </div>

            <div className="product-form-field">
              <label htmlFor="tipoProducto" className="product-form-label">
                <FontAwesomeIcon icon={faListAlt} className="form-icon" /> Tipo de Producto:
              </label>
              <input type="text" id="tipoProducto" className="product-form-input" value={formData.tipoProducto} onChange={handleChange} />
            </div>

            <div className="product-form-field">
              <label htmlFor="categoriaId" className="product-form-label">
                <FontAwesomeIcon icon={faHashtag} className="form-icon" /> ID de Categoría:
              </label>
              <input type="text" id="categoriaId" className="product-form-input" value={formData.categoriaId} onChange={handleChange} />
            </div>

            <div className="product-form-field">
              <label htmlFor="tipoProductoId" className="product-form-label">
                <FontAwesomeIcon icon={faHashtag} className="form-icon" /> ID Tipo Producto:
              </label>
              <input type="text" id="tipoProductoId" className="product-form-input" value={formData.tipoProductoId} onChange={handleChange} />
            </div>

            <div className="product-form-field">
              <label htmlFor="imagen" className="product-form-label">
                <FontAwesomeIcon icon={faImage} className="form-icon" /> Subir Imagen:
              </label>
              <input type="file" id="imagen" accept="image/*" className="product-form-file-input" onChange={handleChange} />
            </div>

            <button type="submit" className="product-form-button">
              <FontAwesomeIcon icon={faTag} className="button-icon" /> Agregar Producto
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductForm;
