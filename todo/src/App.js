import React, { useReducer } from 'react';
import { formReducer, initialState } from './reducers/formReducer';

import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import './App.css';

function App() {
  const [ state, dispatch ] = useReducer(formReducer, initialState);

  return (
    <div className="App">
      <TodoAdd dispatch={dispatch}/>
      <TodoList state={state}/>
    </div>
  );
}

export default App;
