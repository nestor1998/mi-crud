import React from 'react'; // Importa React
import Item from './Item'  // Importa el componente Item para usarlo dentro de List

function List({ items, deleteItem, editItem }) {
    return (
        <ul> {/* Lista no ordenada que contendrá los ítems */}
            {items.map((item) => (  // Recorre el array items para renderizar un componente Item por cada elemento
                <Item
                    key={item.id}       // La key es necesaria para identificar cada elemento único en la lista
                    item={item}         // Pasa el objeto item como prop al componente Item
                    deleteItem={deleteItem} // Pasa la función para eliminar ítems al componente Item
                    editItem={editItem}     // Pasa la función para editar ítems al componente Item
                />
            ))}
        </ul>
    );
}

export default List; // Exporta el componente List para usarlo en otros archivos
