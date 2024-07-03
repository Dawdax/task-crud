import React, { useEffect, useState } from 'react'
import { getTaskRequest } from '../api/Task.api'
import TaskCard from '../components/TaskCard';

function TaskPage() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function loadTasks() {
      const response = await getTaskRequest();
      setTasks(response.data);
    }
    loadTasks();
  }, [])

  function renderMain(){
    if(tasks.length === 0) {
      return <h2>No task yet</h2>
    }
    return tasks.map(task => ( <TaskCard task={task} key ={task.id}/>))
}

  return (
    <div>
      <h1>Task</h1>
      {
        renderMain()
      }

    </div>
  )
}

export default TaskPage