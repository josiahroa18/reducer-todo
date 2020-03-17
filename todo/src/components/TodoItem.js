import React from 'react';

function TodoItem({item, toggleCompleted}){
    
    return(
        <div className='todo-item' key={item.id}>
            <div className='item-container'>
                <input
                    type='checkbox'
                    id={item.id}
                    onClick={toggleCompleted}
                />
                <p>{item.item}</p>
            </div>
            <p>Time Created: {item.timeCreated}</p>
            {item.timeCompleted && <p>Time Completed: {item.timeCompleted}</p>}
        </div>
    );
}

export default TodoItem;