import React from 'react'; // Importa React para poder usar JSX
import Item from './Item'; // Importa el componente Item, que se usa para mostrar cada alumno

function List({ items, deleteItem, editItem }) { // Componente funcional que recibe props: lista de items (alumnos), y funciones para eliminar y editar
  return (
    <ul> {/* Contenedor de lista sin orden (<ul>) */}
      {items.map(item => ( // Recorre cada item del arreglo usando map
        <Item
          key={item.id} // Asigna una clave única por cada alumno para optimizar el renderizado
          item={item} // Pasa el objeto del alumno al componente Item
          deleteItem={deleteItem} // Pasa la función para eliminar
          editItem={editItem} // Pasa la función para editar
        />
      ))}
    </ul>
  );
}

export default List; // Exporta el componente para poder usarlo en App.jsx u otros archivos

