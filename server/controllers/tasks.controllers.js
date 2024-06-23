import { pool } from "../db.js";

//Visualizar todas las tareas
const getTasks = async (req, res) => {
    try {

        const [result] = await pool.query('SELECT * FROM tasks ORDER BY createAt ASC');
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
//Visualizar una tal sola tarea usando el id
const getTaskById = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM tasks WHERE id= ?', [req.params.id]);
        if (result.length === 0) {
            return res.status(404).json({ message: 'Task not found, error 404' })
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
//Crear una tarea
const createTask = async (req, res) => {
    try {
        const { title, description } = req.body
        const [result] = await pool.query('INSERT INTO tasks(title, description) VALUES (?, ?)', [title, description]);
        res.json({
            id: result.insertId,
            title,
            description
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
//Actualizar una tarea
const updateTask = async (req, res) => {
    try {
        const { title, description, done } = req.body;
        const [result] = await pool.query('UPDATE tasks SET title = ? , description = ? , done = ?  WHERE id = ?', [title, description, done, req.params.id]);

        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}
//Eliminar una tarea
const deleteTask = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', req.params.id);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

export {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask

}