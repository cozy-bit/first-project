import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() === '') return
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    }

    setTodos([...todos, newTodo])
    setInputValue('')
  }

  return (
    <div className="app">
      <h1>Мои задачи</h1>
      <p className="counter">Всего задач: 0</p>

      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder='Добавить новую задачу'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button type="submit">Добавить</button>
      </form>

      <ul className="todo-lsit">
        {todos.map(todo => (<li key={todo.id}><span>{todo.text}</span></li>))}
      </ul>
    </div>
  )
}

export default App
