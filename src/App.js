import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Todos } from './Todos';
import { useState } from 'react';
import { AddTodo } from './AddTodo';


function App() {
  const [todos, setTodos] = useState([])
  const [item, setitem] = useState({ sno: -1, title: "", flag: false })
  console.log(item)


  const updatebysno = (sno, new_title) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].sno == sno) {
        todos[i].title = new_title
        setitem({ sno: -1, title: "", flag: false })
      }
    }
  }

  const onEdit = (todo) => {
    const selectedItem = todos.find((e) => { return e == todo })
    setitem({ sno: selectedItem.sno, title: selectedItem.title, flag: true })
    console.log("edit", selectedItem)
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

  return (
    <div>
      <AddTodo addTodo={addTodo} currentItem={item} update={updatebysno} />
      <Todos todos={todos} onDelete={onDelete} onEdit={onEdit} />


    </div>
  )
}

export default App;
