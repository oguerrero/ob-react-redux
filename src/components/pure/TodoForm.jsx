import React, { useRef } from 'react';
import PropTypes from 'prop-types'

const TodoForm = ({submit}) => {

    const newText = useRef()

    const createTodo = (e) => {
        e.preventDefault()
        submit(newText.current.value)
        newText.current.value = ''
    }

    return (
        <div>
            <h2>Create TODOs</h2>
            <form onSubmit={createTodo}>
                <input type='text' ref={newText} />
                <button type='Submit'>Create TODO</button>
            </form>
        </div>
    );
}

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default TodoForm;
