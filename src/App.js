import { useState } from "react"
import './App.css'
import Navbar from './components/Navbar'
import Container from './components/Container'

import plusIcon from './assets/plus-icon.svg'
import minusIcon from './assets/minus-icon.svg'
import SearchInput from './components/SearchInput'
import Info from './components/Info'



function App() {

  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title:"Tisu", count:1},
    {title:"Sabun", count:1},
    {title:"Sikat", count:1},
    {title:"Minum", count:1},
  ])

  //Submit method
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!value){
      alert('Please enter a list')
      return
    }

    const addedTodos = [...todos, {
      title:value, 
      count:1
    }]
    setTodos(addedTodos)
    setValue('')
  }

  //Plus method
  const handleAdd = (index) => {
    const newTodos = [...todos]
    newTodos[index].count += 1
    setTodos(newTodos)
  }
  //Minus method
  const handleMin = (index) => {

    const newTodos = [...todos]

    //selama jumlah count masih diatas 0 bisa lakukan pengurangan
    if(newTodos[index].count > 0){
      const newTodos = [...todos] 
      newTodos[index].count -= 1
    }
    //kalo sudah 0 maka hapus list array value dengan index yang sesuai
    else{
      newTodos.splice(index, 1)
    }
    setTodos(newTodos)
  }

  //Total Count
  const getTotalCount = () => {
    const totalCount = todos.reduce((total, num)=>{
      return total + num.count
    },0)
    return totalCount
  }  

  return (
   <>
    <Navbar/>

    <Container>
     <SearchInput
      onSubmit={handleSubmit}
      onChange={(e) => setValue(e.target.value)}
      value={value}
     />

     <Info
      todosLength={todos.length}
      totalCount={getTotalCount()}
      onDelete={()=>setTodos([])}
     />

      {/* callback function */}
      {todos.length > 0 ? (
        <div className="todos">
        {todos.map((todo, index, arr) => {
          return (
            <div key={index} className={`todo ${!(arr.length === index + 1) && ('todo-devider')}`}>

            {todo.title}

              <div className="todo-icon">
                <div className="todo-count">{todo.count}</div>

                <button onClick={() => handleMin(index)} className="todo-action-button">
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
        <div>Kosong!</div>
      )}
    </Container>
   </>
  );
}



export default App;
