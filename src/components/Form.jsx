import React, { useState, useEffect } from 'react'; // Importa React y los hooks necesarios.

function Form({ addOrUpdateItem, itemToEdit }) { // Componente que recibe dos props: una función y el objeto a editar.
  const [formData, setFormData] = useState({ // Estado local del formulario
    nombre: '',
    asignatura: '',
    promedio: ''
  });

  useEffect(() => { // Hook para actualizar los campos si se va a editar un alumno
    if (itemToEdit) {
      setFormData({
        nombre: itemToEdit.nombre,
        asignatura: itemToEdit.asignatura,
        promedio: itemToEdit.promedio.toString() // Convierte el número en string para el input
      });
    } else {
      setFormData({ nombre: '', asignatura: '', promedio: '' }); // Resetea si no hay nada que editar
    }
  }, [itemToEdit]); // Se ejecuta cada vez que itemToEdit cambia

  const handleChange = (e) => { // Maneja los cambios en los inputs
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Actualiza solo el campo modificado
  };

  const handleSubmit = (e) => { // Maneja el envío del formulario
    e.preventDefault(); // Previene el comportamiento por defecto (refrescar la página)

    // Validación básica: campos vacíos
    if (
      formData.nombre.trim() === '' ||
      formData.asignatura.trim() === '' ||
      formData.promedio.trim() === ''
    ) {
      alert('Por favor, completa todos los campos.'); // Alerta si hay campos vacíos
      return;
    }

    // Validación del promedio
    const promedio = parseFloat(formData.promedio); // Convierte a número
    if (isNaN(promedio) || promedio < 1 || promedio > 7) {
      alert('El promedio debe ser un número entre 1.0 y 7.0'); // Alerta si el promedio no es válido
      return;
    }

    addOrUpdateItem(formData); // Llama a la función del padre para agregar o actualizar
    setFormData({ nombre: '', asignatura: '', promedio: '' }); // Resetea el formulario después de enviar
  };

  return (
    <form onSubmit={handleSubmit}> {/* Formulario que ejecuta handleSubmit al enviar */}

      {/* Campo de entrada para el nombre */}
      <label htmlFor="nombre">Nombre del alumno:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        placeholder="Ej: Néstor Muñoz"
        value={formData.nombre}
        onChange={handleChange}
        maxLength={20}
      />

      {/* Campo de entrada para la asignatura */}
      <label htmlFor="asignatura">Asignatura:</label>
      <input
        type="text"
        id="asignatura"
        name="asignatura"
        placeholder="Ej: Programación"
        value={formData.asignatura}
        onChange={handleChange}
        maxLength={20}
      />

      {/* Campo de entrada para el promedio */}
      <label htmlFor="promedio">Promedio (0.0 - 7.0):</label>
      <input
        type="number"
        id="promedio"
        name="promedio"
        placeholder="Ej: 5.5"
        step="0.1"
        value={formData.promedio}
        onChange={handleChange}
      />

      {/* Botón de envío que cambia según si se edita o se agrega */}
      <button type="submit" className='boton-agregar'>
        {itemToEdit ? 'Actualizar' : 'Agregar Evaluación'}
      </button>
    </form>
  );
}

export default Form; // Exporta el componente para que pueda ser usado en otros archivos
