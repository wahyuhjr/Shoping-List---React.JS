import { useState } from "react"
import './App.css'
import shoppingIcon from './assets/shopping-icon.svg'
import plusIcon from './assets/plus-icon.svg'
import minusIcon from './assets/minus-icon.svg'
import classnames from 'classnames'

function App() {

  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title:"Tisu", count:1},
    {title:"Sabun", count:1},
    {title:"Sikat", count:1},
    {title:"Minum", count:1},
  ])

  const handleAdd = (index) => {
    const newTodos = [...todos]
    newTodos[index].count += 1
    setTodos(newTodos)
  }

  return (
   <>
    <nav className="nav">
      <img className="nav-icon" src={shoppingIcon} alt="shopping icon"/>
      <h1 className="nav-title">Shopping List</h1>
    </nav>

    <section className="container">
      <form className="form">
        <input onChange={(event) => {setValue(event.target.value)}} 
        value={value}
          className="input" type="text" placeholder="List" 
        />
        <button className="add-button" type="submit">Add</button>
      </form>

      {/* callback function */}
      {todos.length > 0 ? (
        <div className="todos">
        {todos.map((todo, index, arr) => {
          return (
            <div key={index} className={`todo ${!(arr.length === index + 1) && ('todo-devider')}`}>

            {todo.title}

              <div className="todo-icon">
                <div className="todo-count">{todo.count}</div>

                <button className="todo-action-button">
                  <img src={minusIcon} alt="minus icon"/>
                </button>

                <button onClick={() => handleAdd(index)} className="todo-action-button">
                  <img src={plusIcon} alt="plus icon"/>
                </button>

              </div>
            </div>
          )}
          )}
        </div>
      ) : (
        <div></div>
      )}
    </section>
   </>
  );
}



export default App;
