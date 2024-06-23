import React from 'react'
import { Formik, Form } from 'formik'
import { createTaskRequest } from '../api/Task.api'

function TaskForm() {
    return (
        <div>
            <Formik initialValues={{
                title: "",
                description: ""
            }}
                onSubmit={async (values) => {
                    console.log(values)
                    try {
                        const reponse= await createTaskRequest(values);
                        console.log(reponse)
                    } catch (error) {
                        console.log(error);                        
                    }
                }}
            >
                {({ handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>title</label>
                        <input onChange={handleChange} type='text' name='title' placeholder='Write a title' />

                        <label>description</label>
                        <textarea onChange={handleChange} name="description" rows='3' placeholder='Write a description'></textarea>

                        <button type='submit'>Save</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default TaskForm