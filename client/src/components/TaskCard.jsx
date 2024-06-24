import React from 'react'

function TaskCard({task}) {
    return (
        <div key={task.id}>
            <h2> {task.title} </h2>
            <p> {task.description} </p>
            <span> {task.done === 1 ? "✔️ " : "❌"} </span>
            <span> {task.createAt} </span>
            <button>Delete</button>
            <button>Update</button>
        </div>
    )
}

export default TaskCard