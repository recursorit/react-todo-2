import React from 'react'
import { Button } from 'react-bootstrap'


export const TodoItem = ({ todo, onDelete, onEdit }) => {

    console.log("Exec TodoItem.js")
    return (
        <tr>
            <td>{todo.sno}</td>
            <td>{todo.title}</td>
            <td>
                <Button className='btn-danger float-right' onClick={() => onDelete(todo)}>Delete</Button>
                <Button className='btn-info px-3 mx-3 float-right' onClick={() => { onEdit(todo) }}>Edit</Button>
            </td>
        </tr>
    )
}