import './App.css';
import Counter from './component/counter'; 
import ListManager from './component/liste'; 
import ColorBox from './component/couleur'; 
import NotesManager from './component/note';
import TodoList from './component/todo'; 

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Travaux Pratiques React 18</h1>

      <h2>Exercice 1 : Compteur</h2>
      <Counter initialCount={10} step={5} />

      <h2>Exercice 2 : Liste Dynamique</h2>
      <ListManager initialItems={['React', 'Angular', 'VueJs']} placeholder="Nouvel élément" />

      <h2>Exercice 3 : Changement de couleur</h2>
      <ColorBox initialColor="#FF0000" colorOptions={['#FF0000', '#00FF00', '#0000FF']} />

      <h2>Exercice 4 : Gestionnaire de notes</h2>
      <NotesManager initialNotes={[12, 15, 8]} />

      <h2>Exercice 5 : Todo List</h2>
      <TodoList
        initialTasks={[
          { name: 'Finir le projet React', priority: 'Haute', completed: false },
          { name: 'Préparer le repas', priority: 'Moyenne', completed: false },
          { name: 'Aller courir', priority: 'Basse', completed: false },
        ]}
      />
    </div>
  );
}

export default App;