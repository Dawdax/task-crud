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
                onSubmit={async (values, actions) => {
                    console.log(values)
                    try {
                        const response = await createTaskRequest(values);
                        console.log(response);
                        actions.resetForm(); // Restablecer el formulario aquí
                    } catch (error) {
                        console.log(error);
                    }
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <label>Title</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='title'
                            placeholder='Write a title'
                            value={values.title}
                        />

                        <label>Description</label>
                        <textarea
                            onChange={handleChange}
                            name="description"
                            rows='3'
                            placeholder='Write a description'
                            value={values.description}
                        ></textarea>

                        <button type='submit' disabled={isSubmitting}>
                            {
                                isSubmitting ? "saving..." : "Save"
                            }
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default TaskForm
