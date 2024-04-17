import React, { useState } from "react"; 
import axios from "axios"; 

const baseUrl = 'http://localhost:3001/api/notes'; // URL base para las solicitudes

// Definición del componente funcional FormNota
const FormNota = ({ addNote }) => {
  const [newNote, setNewNote] = useState(""); //hook de estado, Estado local para almacenar el contenido de la nueva nota

  // Función para manejar el cambio en el campo de entrada de la nota
  const handleNoteChange = (event) => {
    setNewNote(event.target.value); // Actualiza el estado newNote con el valor del campo de entrada
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Objeto que representa la nueva nota
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5, // Asigna aleatoriamente la propiedad 'important'
      date: new Date().toISOString(), // Fecha actual en formato ISO
    };

    
    axios
      .post(baseUrl, noteObject)
      .then((response) => {
        addNote(response.data);
        setNewNote("");
      });
  };


  return (
    <div className="form-container" style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit} style={{ borderRadius: "10px", backgroundColor: "beige", padding: "20px" }}>
        {/* Campo de entrada para la nota */}
        <input 
          value={newNote} // Valor del campo de entrada vinculado al estado newNote
          onChange={handleNoteChange} // Maneja el cambio en el campo de entrada
          style={{ borderRadius: "10px", padding: "10px", marginRight: "10px", border: "1px solid grey" }} 
        />
        {/* Botón para guardar la nota */}
        <button type="submit" style={{ backgroundColor: "pink", borderRadius: "5px", padding: "5px", border: "none", cursor: "pointer" }}>Guardar</button>
      </form>
    </div>
  );
};

export default FormNota; 
