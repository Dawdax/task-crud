import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TaskPage from './pages/TaskPage'
import TaskForm from './pages/TaskForm'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar /> 
      <Routes>
        <Route path='/' element={<TaskPage />} />
        <Route path='/newTask' element={<TaskForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App