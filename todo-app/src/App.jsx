import React, { useState } from 'react';
import './index.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all'); // Mevcut filtre durumunu takip etmek için

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, id: Date.now(), completed: false }]);
      setNewTodo('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const deleteCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Filtreye göre ToDo'ları filtrele
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all' durumunda tümünü göster
  }).sort((a, b) => { // Sıralama hala burada yapılabilir
    if (a.completed && !b.completed) {
      return 1;
    }
    if (!a.completed && b.completed) {
      return -1;
    }
    return 0;
  });

  return (
    <div className="todo-container">
      <h1> 🦋༘ ToDo List 🦋༘ </h1>
      <div className="add-todo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Yeni ToDo girin..."
        />
        <button onClick={addTodo}>Ekle</button>
      </div>

      <div className="todo-list">
        {filteredTodos.map(todo => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div className="todo-item-content">
              <span className="status-emoji incomplete" onClick={() => toggleComplete(todo.id)}>❌</span>
              <span className="status-emoji complete" onClick={() => toggleComplete(todo.id)}>✅</span>
              <span className="todo-text" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
            </div>
            <div className="todo-actions">
              <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Sil</button>
              <button onClick={() => {
                const updatedText = prompt('Güncellemek için yeni metni girin:', todo.text);
                if (updatedText) {
                  updateTodo(todo.id, updatedText);
                }
              }} className="edit-btn">Güncelle</button>
            </div>
          </div>
        ))}
      </div>

      <div className="filters">
        <button onClick={() => setFilter('all')} className={`filter-button ${filter === 'all' ? 'active' : ''}`}>Tümünü Göster</button>
        <button onClick={() => setFilter('active')} className={`filter-button ${filter === 'active' ? 'active' : ''}`}>Aktif</button>
        <button onClick={() => setFilter('completed')} className={`filter-button ${filter === 'completed' ? 'active' : ''}`}>Tamamlanan</button>
        <button onClick={deleteCompleted} className="filter-button delete-completed">Tamamlananları Sil</button>
      </div>
    </div>
  );
}

export default App;