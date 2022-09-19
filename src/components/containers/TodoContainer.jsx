import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../store/actions/actions'
import TodoList from '../pure/TodoList'

// Filter todo list
const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed)
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed)
        default:
            return todos
    }
}

const mapStateToProps = (state) => {
    return { todos: filterTodos(state.rootReducer.todosState, state.rootReducer.filterState) }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

// Connect state & dispatch to todo list prop
const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodoContainer
