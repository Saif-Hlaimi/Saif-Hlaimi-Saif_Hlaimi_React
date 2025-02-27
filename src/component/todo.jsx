import { useState } from 'react';

function todo({ initialTasks = [] }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('Moyenne');
  const [search, setSearch] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTaskName.trim()) {
      setTasks([...tasks, { name: newTaskName, priority: newTaskPriority, completed: false }]);
      setNewTaskName('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div>
      <h2>Todo List avec Priorités</h2>
      <p>Total des tâches : {totalTasks} | Tâches terminées : {completedTasks}</p>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher une tâche"
      />
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            {task.name} - {task.priority}
          </li>
        ))}
      </ul>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Nom de la tâche"
        />
        <select
          value={newTaskPriority}
          onChange={(e) => setNewTaskPriority(e.target.value)}
        >
          <option value="Haute">Haute</option>
          <option value="Moyenne">Moyenne</option>
          <option value="Basse">Basse</option>
        </select>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default todo;