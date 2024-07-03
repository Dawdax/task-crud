import React from 'react'
import { deleteTaskRequest } from '../api/Task.api'

function TaskCard({task}) {

    const handleDelete = async (id) =>{
        try {
            const reponse = await deleteTaskRequest(id);
            console.log(reponse);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div key={task.id}>
            <h2> {task.title} </h2>
            <p> {task.description} </p>
            <span> {task.done === 1 ? "✔️ " : "❌"} </span>
            <span> {task.createAt} </span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <button>Update</button>
        </div>
    )
}

export default TaskCard