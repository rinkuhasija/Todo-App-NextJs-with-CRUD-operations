"use client"
import React, { Children, FormEventHandler, useState } from 'react'
import Modal from './Modal'

const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [newTaskValue, setNewTaskValue] = useState<string>('')

    const handleSubmitNewTodo = (e:any) => {
        e.preventDefault();
        console.log(newTaskValue);
        setNewTaskValue("")
    }
    return (
        <div>
            <button onClick={() => setModalOpen(true)} className='btn btn-primary w-full'>ADD NEW TASK <span className='text-xl'> + </span>  </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <h3 className='font-bold text-lg'>Add new Task</h3>
                <div className='modal-action'>
                <input value={newTaskValue} onChange={(e) => setNewTaskValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
                <button onClick={handleSubmitNewTodo} className='btn'>SUBMIT</button>
                </div>
            </Modal>
        </div>
    )
}

export default AddTask
