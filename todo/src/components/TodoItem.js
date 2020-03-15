import React from 'react';

function TodoItem({item, dispatch}){

    const toggleCompleted = e => {
        dispatch({type: 'TOGGLE_COMPLETED', id: e.target.id * 1});
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