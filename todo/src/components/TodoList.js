import React from 'react';
import TodoItem from './TodoItem';
import '../App.css';

function TodoList({state}){
    return(
        <div>
            {state.map(item => {
                return <TodoItem item={item} key={item.id}/>
            })}
        </div>
    );
}

export default TodoList;