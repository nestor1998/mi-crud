import React from 'react'; // Importa React para crear componentes

function Item({ item, deleteItem, editItem }) {
    return (
        <li> {/* Elemento de lista que representa un ítem */}
            {item.value} {/* Muestra el valor del ítem */}
            <button onClick={() => editItem(item)}>Editar</button> {/* Botón que llama a la función para editar el ítem */}
            <button onClick={() => deleteItem(item.id)}>Eliminar</button> {/* Botón que llama a la función para eliminar el ítem por su id */}
        </li>
    );
}

export default Item; // Exporta el componente para usarlo en otros archivos
