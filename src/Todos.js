import React, { useState } from 'react'
import { TodoItem } from './TodoItem'
import { Table, Button, Modal } from 'react-bootstrap'

export const Todos = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState({});

    console.log("Exec Todos.js")

    const { todos, onDelete, onEdit } = props;

    const onYesClicked = (todo) => {
        onDelete(todo);
        setModalIsOpen(false);
    }

    const setSelectedTodoItem = (todo) => {
        setSelectedTodo(todo);
        setModalIsOpen(true);
    }

    return (
        <div className='container'>
            <h2 className='text-center text-primary my-3'>Todos List</h2>
            <Table striped bordered>
                <thead >
                    <tr>
                        <th>SNo</th>
                        <th>Todo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => {
                        return <TodoItem
                            setModalIsOpen={setModalIsOpen}
                            todo={todo}
                            key={todo.sno}
                            onDelete={setSelectedTodoItem}
                            onEdit={props.onEdit}
                        />
                    })}
                </tbody>
            </Table>

            <Modal show={modalIsOpen} onHide={() => setModalIsOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Action</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you wish to delete this record?</Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={() => setModalIsOpen(false)}>
                        Close
                </Button>
                    <Button variant="danger" onClick={() => onYesClicked(selectedTodo)}>
                        Delete
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
