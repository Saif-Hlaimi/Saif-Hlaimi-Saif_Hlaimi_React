import { useState } from 'react';

function Notes({ initialNotes = [] }) {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    const noteValue = parseFloat(newNote);
    if (!isNaN(noteValue) && noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote('');
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const average = notes.length > 0
    ? (notes.reduce((sum, note) => sum + note, 0) / notes.length).toFixed(2)
    : 0;

  return (
    <div>
      <h2>Gestionnaire de notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note} <button onClick={() => deleteNote(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <p>Moyenne : {average}</p>
      <form onSubmit={addNote}>
        <input
          type="number"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Ajouter une note (0-20)"
          step="0.1"
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default Notes;