import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react';

export const AddTodo = (props) => {
    const { addTodo, currentItem, update } = props
    const [title, setTitle] = useState("");
    console.log("Exec AddTodo.js", title)

    const submit = (e) => {
        e.preventDefault()

        if (currentItem.sno != -1) {
            update(currentItem.sno, title)
        }
        else {
            addTodo(title)
        }
        setTitle("")
    }
    let val = "";

    console.log(currentItem)
    if (currentItem.title != "" && currentItem.flag) {
        val = currentItem.title
        currentItem.flag = false
    }
    else {
        val = title
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
                                    <input type='text' value={val} className='form-control' placeholder='Add your todos here.' onChange={(e) => { setTitle(e.target.value) }} >
                                    </input>
                                    <Button type='submit' className='mx-2' disabled={!title}>{currentItem.sno != -1 ? "Save" : "Add"}</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
