import { useState, useEffect } from 'react'; // Importa hooks useState y useEffect

import Form from './components/Form';  // Importa componente Form
import List from './components/List';  // Importa componente List
import './App.css';                    // Importa estilos CSS

function App() {
  const [items, setItems] = useState([]);           // Estado para la lista de ítems (inicia vacío)
  const [itemToEdit, setItemToEdit] = useState(null); // Estado para el ítem que se quiere editar (inicia null)

  useEffect(() => {
    const storedItems =
      JSON.parse(localStorage.getItem('items')) || []; // Obtiene ítems guardados en localStorage o un array vacío
    setItems(storedItems);                             // Inicializa el estado con los ítems guardados
  }, []); // Se ejecuta solo una vez al montar el componente

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items)); // Guarda los ítems en localStorage cada vez que cambian
  }, [items]); // Se ejecuta cada vez que cambia "items"

  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      // Si hay un ítem para editar, actualiza ese ítem en la lista
      setItems(items.map(item => item.id === itemToEdit.id ? { ...item, value } : item));
      setItemToEdit(null); // Limpia el ítem a editar después de actualizar
    } else {
      // Si no hay ítem para editar, agrega uno nuevo con un id único
      setItems([...items, { id: Date.now(), value }]);
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id)); // Elimina el ítem con el id dado
  };

  const editItem = (item) => {
    setItemToEdit(item); // Establece el ítem que se quiere editar
  };

  return (
    <div className="App">
      <h1>CRUD con LocalStorage</h1> {/* Título */}
      <Form
        addOrUpdateItem={addOrUpdateItem}  // Pasa función para agregar/actualizar al Form
        itemToEdit={itemToEdit}             // Pasa el ítem a editar al Form
      />
      <List
        items={items}                      // Pasa la lista de ítems al List
        deleteItem={deleteItem}            // Pasa función para eliminar ítem al List
        editItem={editItem}                // Pasa función para editar ítem al List
      />
    </div>
  );
}

export default App; // Exporta el componente principal
