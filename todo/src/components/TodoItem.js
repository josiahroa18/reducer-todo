import React from 'react';

function TodoItem({item}){

    const toggleCompleted = e => {
        console.log('toggled', e.target.id);
    }

    return(
        <div className='todo-item' key={item.id}>
            <input
                type='checkbox'
                id={item.id}
                onClick={toggleCompleted}
            />
            <p>{item.item}</p>
        </div>
    );
}

export default TodoItem;