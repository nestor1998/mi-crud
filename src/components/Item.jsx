import React from 'react'; // Importa React para poder usar JSX

// Componente funcional que representa un ítem (alumno)
// Recibe las props: item (el alumno), deleteItem (función para eliminar), editItem (función para editar)
function Item({ item, deleteItem, editItem }) {
  return (
    <li className="item"> {/* Cada alumno se representa como un elemento <li> */}
      
      <div className="item-info"> {/* Contenedor de la información del alumno */}
        <p><strong>Alumno:</strong> <strong>{item.nombre}</strong></p> {/* Muestra el nombre en negrita */}
        <p>Asignatura: {item.asignatura}</p> {/* Muestra la asignatura */}
        <p>Promedio: <strong>{item.promedio}</strong> </p> {/* Muestra el promedio en negrita */}
        <p className='apreciacion-color'>{item.apreciacion}</p> {/* Muestra la apreciación con clase especial para darle color */}
      </div>

      <div className="item-actions"> {/* Contenedor de los botones de acción */}
        {/* Botón para editar, llama a la función editItem pasando el objeto item */}
        <button onClick={() => editItem(item)} className="btn edit-btn">Editar</button>

        {/* Botón para eliminar, llama a la función deleteItem pasando el id del alumno */}
        <button onClick={() => deleteItem(item.id)} className="btn delete-btn">Eliminar</button>
      </div>
      
    </li>
  );
}

export default Item; // Exporta el componente para poder usarlo en la lista
