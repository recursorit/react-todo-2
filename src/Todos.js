import React from 'react'
import { TodoItem } from './TodoItem'
import { Table } from 'react-bootstrap'




export const Todos = (props) => {
    return (
        <div className='container'>
            <h2 className='text-center text-primary my-3'>Todos List</h2>
            <Table striped bordered>
                <thead >
                    <tr>
                        <th>SNo</th>
                        <th>Todo</th>
                    </tr>
                </thead>
            </Table>
            {props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} onEdit={props.onEdit} />
            })}
        </div>
    )
}
