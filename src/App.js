import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Todos } from './Todos';
import { useState } from 'react';
import { AddTodo } from './AddTodo';



function App() {

  const onEdit = (todo,sno)=>{
    console.log('edited',todo)
    
  }
  const onDelete = (todo) => {
    console.log("deleted", todo)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }
  const addTodo = (title) => {
    console.log('added', title)
    let sno = todos.length + 1
    const myTodo = {
      sno: sno,
      title: title
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo)
  }
  const [todos, setTodos] = useState([])
  return (
    <>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} onEdit={onEdit}/>
      

    </>
  );
}

export default App;
