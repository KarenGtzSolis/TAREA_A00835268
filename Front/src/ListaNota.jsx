import React from "react";

const ListaNota = ({ notes }) => {
  return (
    <ul className="lista-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {notes.map((note) => (
        <li key={note.id} style={{ backgroundColor: "beige", margin: "5px", padding: "10px", width: "500px", textDecoration: "none" }}>
          {note.content}
        </li>
      ))}
    </ul>
  );
};

export default ListaNota;
