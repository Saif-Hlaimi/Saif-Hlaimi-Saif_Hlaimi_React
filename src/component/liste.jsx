import { useState } from 'react';

function liste({ initialItems = [], placeholder = 'Entrez un élément' }) {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div>
      <h2>Liste :</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder={placeholder}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default liste;