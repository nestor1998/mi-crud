import React, { useState, useEffect } from 'react'; // Importa React y hooks useState y useEffect

function Form({ addOrUpdateItem, itemToEdit }) {
    const [inputValue, setInputValue] = useState(''); // Estado para el valor del input, inicia vacío

    useEffect(() => { 
        if (itemToEdit) {
            setInputValue(itemToEdit.value); // Si hay item para editar, precarga el input con su valor
        } else {
            setInputValue(''); // Si no, limpia el input
        }
    }, [itemToEdit]); // Se ejecuta cada vez que cambia itemToEdit

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene recarga de página al enviar el formulario
        if (inputValue.trim()) { // Valida que el input no esté vacío (sin espacios)
            addOrUpdateItem(inputValue); // Llama a la función para agregar o actualizar con el valor del input
            setInputValue(''); // Limpia el input después de enviar
        }
    };

    return (
        <form onSubmit={handleSubmit}> {/* Formulario que llama a handleSubmit al enviarse */}
            <input
                type="text"
                value={inputValue} // El valor del input es controlado por el estado
                onChange={(e) => setInputValue(e.target.value)} // Actualiza estado cuando el usuario escribe
            />
            <button type="submit">{itemToEdit ? 'Actualizar' : 'Agregar'}</button> {/* Texto cambia según si es edición o nuevo */}
        </form>
    );
}

export default Form; // Exporta el componente para usarlo en otros archivos