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


  return (
    <div>
      <h1>Task</h1>
      {
        tasks.map(task => ( 
          <TaskCard task={task} key ={task.id}/>
        ))
      }

    </div>
  )
}

export default TaskPage