import { pool } from "../db.js";


const getTasks = (req, res) =>{
    res.send('Obteniendo tareas');
}
const getTask = (req, res) =>{
    res.send('Obteniendo una tarea');
}
const createTask = async (req, res) =>{
    const {title, description} = req.body
    const [result] = await pool.query('INSERT INTO tasks(title, description) VALUES (?, ?)', [title, description]);
    res.json({
        id: result.insertId,
        title,
        description
    }) 

}
const updateTask = (req, res) =>{
    res.send('Actualizando tarea');
}
const deleteTask = (req, res) =>{
    res.send('Eliminando tarea');
}

export {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask

}