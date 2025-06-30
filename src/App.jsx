import { useState, useEffect } from 'react'; // Importa hooks
import Form from './components/Form'; // Importa Formulario
import List from './components/List'; // Importa Lista
import './App.css'; // Importa estilos

function App() {
  const [items, setItems] = useState(() => {
  const storedItems = localStorage.getItem('items');
  return storedItems ? JSON.parse(storedItems) : [];
  });
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const calcularApreciacion = (promedio) => { // Según el promedio, da un mensaje
    if (promedio >= 6.5) return 'Destacado';
    if (promedio >= 5.6) return 'Buen trabajo';
    if (promedio >= 4.0) return 'Con mejora';
    return 'Deficiente';
  };

  const addOrUpdateItem = (data) => { // Agrega o actualiza un alumno
    const apreciacion = calcularApreciacion(parseFloat(data.promedio));
    const nuevoItem = { ...data, promedio: parseFloat(data.promedio), apreciacion };

    if (itemToEdit) {
      // Si se está editando, actualiza el item existente
      setItems(items.map(item => item.id === itemToEdit.id ? { ...nuevoItem, id: item.id } : item));
      setItemToEdit(null); // Limpia el modo edición
    } else {
      // Si es nuevo, agrega con un ID único
      setItems([...items, { ...nuevoItem, id: Date.now() }]);
    }
  };

  const deleteItem = (id) => {
  // Si el ítem que se está editando es el que se va a eliminar, limpiamos el modo edición
  if (itemToEdit && itemToEdit.id === id) {
    setItemToEdit(null);
  }

  // Luego eliminamos el ítem normalmente
  setItems(items.filter(item => item.id !== id));
  };

  const editItem = (item) => {
    setItemToEdit(item);
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // para que haga scroll suave
    });
  };

  return (
    <div className="escala-general"> {/* Contenedor principal */}
      <>
        <h1 className="titulo-centro">
          Evaluación de Alumnos {/* Título principal */}
        </h1>

        <div className="App"> {/* Sección del formulario */}
          <h2 className='edit-agreg-eva'>
            {itemToEdit ? 'Editar Evaluación' : 'Agregar Nueva Evaluación'} {/* Título dinámico según si se edita o agrega */}
          </h2>

          {/* Formulario para agregar o editar alumnos */}
          <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
        </div>

        <div className="alumnos-container"> {/* Sección de alumnos guardados */}
          <h2 className='eva-guard-text'>Evaluaciones Guardadas</h2>

          {/* Si no hay alumnos, muestra un mensaje. Si hay, muestra la lista */}
          {items.length === 0 ? (
            <p className='mensaje-no-eva'>No hay evaluaciones guardadas aún, ¡Agrega una!</p>
          ) : (
            <List items={items} editItem={editItem} deleteItem={deleteItem} />
          )}
        </div>
      </>
    </div>
  );
}



export default App;

