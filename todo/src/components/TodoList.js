import React from 'react';
import TodoItem from './TodoItem';
import '../App.css';

function TodoList({state, dispatch}){
    return(
        <div>
            {state.map(item => {
                return <TodoItem item={item} key={item.id} dispatch={dispatch}/>
            })}
        </div>
    );
}

export default TodoList;