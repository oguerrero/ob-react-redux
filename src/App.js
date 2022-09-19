import React from 'react'
import './App.css'
import TodoContainer from './components/containers/TodoContainer'
import TodoFormContainer from './components/containers/TodoFormContainer'
import FilterOptions from './components/pure/FilterOptions'

const App = () => {
    return (
        <div className='App'>
            <header className='App-header'>
                <TodoContainer />
                <TodoFormContainer />
                <FilterOptions />
            </header>
        </div>
    )
}

export default App
