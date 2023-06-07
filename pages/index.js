import { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCreateTodo = () => {
    if (title && description) {
      const newTodo = { title, description };
      setTodos([...todos, newTodo]);
      setTitle('');
      setDescription('');
    }
  };

  const handleEditTodo = (index) => {
    const todoToEdit = todos[index];
    setTitle(todoToEdit.title);
    setDescription(todoToEdit.description);
    setEditIndex(index);
  };

  const handleUpdateTodo = () => {
    if (editIndex !== -1) {
      const updatedTodo = { title, description };
      const updatedTodos = [...todos];
      updatedTodos.splice(editIndex, 1, updatedTodo);
      setTodos(updatedTodos);
      setTitle('');
      setDescription('');
      setEditIndex(-1);
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>

      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        {editIndex === -1 ? (
          <button onClick={handleCreateTodo}>Create</button>
        ) : (
          <button onClick={handleUpdateTodo}>Update</button>
        )}
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div>
              <strong>{todo.title}</strong>
              <p>{todo.description}</p>
              <button onClick={() => handleEditTodo(index)}>Edit</button>
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


