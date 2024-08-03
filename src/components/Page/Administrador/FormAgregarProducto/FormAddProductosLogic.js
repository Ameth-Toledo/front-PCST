import Swal from 'sweetalert2';

const showIncompleteFieldsAlert = () => {
  Swal.fire({
    icon: 'error',
    title: 'Campos incompletos',
    text: 'Por favor, complete todos los campos requeridos.',
  });
};

const showInvalidPriceAlert = () => {
  Swal.fire({
    icon: 'error',
    title: 'Precio inválido',
    text: 'El precio no puede ser negativo.',
  });
};

const showSuccessAlert = () => {
  Swal.fire({
    icon: 'success',
    title: 'Producto agregado',
    text: 'El producto se ha agregado exitosamente.',
  });
};

const validateForm = (formData) => {
  const { nombre, precio, descripcion, tipoProducto, categoriaId, tipoProductoId } = formData;
  
  if (!nombre || !precio || !descripcion || !tipoProducto || !categoriaId || !tipoProductoId) {
    showIncompleteFieldsAlert();
    return false;
  }

  if (precio < 0) {
    showInvalidPriceAlert();
    return false;
  }

  return true;
};

export { validateForm, showSuccessAlert };
