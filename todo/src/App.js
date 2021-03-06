import React, { useReducer } from 'react';
import { formReducer, initialState } from './reducers/formReducer';

import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import './App.css';

function App() {
  const [ state, dispatch ] = useReducer(formReducer, initialState);

  // Used in TodoItem to toggle completed
  const toggleCompleted = e => {
    dispatch({type: 'TOGGLE_COMPLETED', id: e.target.id * 1});
  }

  console.log(state);

  return (
    <div className="App">
      <TodoAdd dispatch={dispatch}/>
      <TodoList state={state} toggleCompleted={toggleCompleted}/>
    </div>
  );
}

export default App;
