import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    if (text.trim() === "") return;
    setNotes([...notes, text]);
    setText("");
  };
  
  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const editNote = (index) => {
    const newText = prompt("Edit your note:", notes[index]);
    if (newText !== null && newText.trim() !== "") {
      let updatedNotes = [...notes];
      updatedNotes[index] = newText;
      setNotes(updatedNotes);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>📝 My Notes</h1>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Write a note..."
      />
      <button onClick={addNote}>Add</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {notes.map((note, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {note} 
            <button onClick={() => editNote(index)}>✏️</button>
            <button onClick={() => deleteNote(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
