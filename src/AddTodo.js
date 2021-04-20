import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState('');

    const submit = (e) => {
        e.preventDefault()
        addTodo(title)
    }
 
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-10  mx-auto col-md-8 mt-4'>
                        <h2 className='text-center text-primary'>Todo Input</h2>
                        <div className='card card-body my-5'>
                            <form onSubmit={submit}>
                                <div className='input-group'>
                                    <input type='text' value={title} className='form-control' placeholder='Add your todos here.' onChange={(e) => { setTitle(e.target.value) }}>
                                    </input>
                                    <Button type='submit' className='mx-2' disabled={!title}>Add</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
