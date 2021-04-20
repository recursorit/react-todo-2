import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import Modal from 'react-modal'


export const TodoItem = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>

            <Table striped bordered>
                <tbody className='text-center'>
                    <tr>
                        <td>{props.todo.sno}</td>
                        <td>{props.todo.title}</td>
                        <td>
                            <Button className='btn-danger float-right' onClick={() => setModalIsOpen(true)}>Delete</Button>
                            <Button className='btn-info px-3 mx-3 float-right' onClick={() => { props.onEdit(props.todo) }}>Edit</Button>
                            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                                style={
                                    {
                                        overlay: {
                                            position: 'fixed',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundColor: 'rgba(255, 255, 255, 0.75)'
                                        },
                                        content: {
                                            position: 'absolute',
                                            top: '245px',
                                            left: '30%',
                                            right: '30%',
                                            bottom: '245px',
                                            border: '1px solid #ccc',
                                            background: '#fff',
                                            overflow: 'auto',
                                            WebkitOverflowScrolling: 'touch',
                                            borderRadius: '4px',
                                            outline: 'none',
                                            padding: '20px'
                                        }
                                    }
                                }>
                                <h3>Confirmation...</h3>
                                <h4>Are you sure you want to delete?</h4>
                                <Button className='float-right mx-2 px-4' onClick={() => setModalIsOpen(false)}>Close</Button>
                                <Button className='btn-danger float-right  ' onClick={() => { props.onDelete(props.todo) }}>
                                    Delete</Button>
                            </Modal>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}


{/* <Table striped bordered>
      <thead className='text-center'>
        <tr>
          <th>SNo</th>
          <th>Todo</th>
          <th></th>
        </tr>
      </thead>
      <tbody className='text-center' >
      {
        <tr>
          <td>1</td>
          <td>todo will be displayed here.</td>
          <td>
            <Button className='btn-info px-3 mx-3'>Edit</Button>
            <Button className='btn-danger' onClick={onDelete}>Delete</Button>
          </td>
        </tr> */}
{
    /* <Table striped bordered>
              
                    
                        <th>Sno</th>
                        <th>Title</th>
                        <th></th>
                    
         
                    <tr>
                        <td>{props.todo.sno}</td>
                        <td>{props.todo.title}</td>
                        <td><Button className='btn-primary px-3 mx-3'>Edit</Button>
                            <Button className='btn-danger'>Delete</Button>
                        </td>
                    </tr>
            

            </Table> */}