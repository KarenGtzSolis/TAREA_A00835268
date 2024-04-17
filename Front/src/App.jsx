import React, { useState, useEffect } from "react"; 
import axios from "axios"; 
import Header from "./Header"; 
import ListaNota from "./ListaNota";
import FormNota from "./FormNota"; 

const baseUrl = 'http://localhost:3001/api/notes'; // URL base para las solicitudes

const App = () => { // Define el componente funcional App
  const [notes, setNotes] = useState([]); // Estado local 'notes' inicializado como un array vacío, Hook de estado 

  useEffect(() => { // Hook de efecto que se ejecuta después de que la primera renderización se completa
    axios.get(baseUrl).then((response) => { // Realiza una solicitud GET para obtener las notas desde el servidor
      setNotes(response.data); // Actualiza el estado 'notes' con los datos obtenidos
    });
  }, []); // El efecto se ejecuta solo una vez, ya que el array de dependencias está vacío

  const addNote = (newNote) => { // Función para agregar una nueva nota al estado 'notes'
    setNotes([...notes, newNote]); // Agrega la nueva nota al array 'notes' utilizando el spread operator
  };

  // Renderizado del componente App
  return (
    <div>
      <Header /> {/* Renderiza el componente Header */}
      <ListaNota notes={notes} /> {/* Renderiza el componente ListaNota y pasa las notas como una prop */}
      <FormNota addNote={addNote} /> {/* Renderiza el componente FormNota y pasa la función addNote como una prop */}
    </div>
  );
};

export default App; 
