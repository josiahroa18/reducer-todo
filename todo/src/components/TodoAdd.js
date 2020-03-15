import React, { useState } from 'react';
import '../App.css';

function TodoAdd({dispatch}){
    const [ value, setValue ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_ITEM', payload: value});
        e.target.reset();
    }

    const handleChange = e => {
        setValue(e.target.value);
    }

    return(
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label>New Todo Item:</label>
                <input onChange={handleChange}></input>
                <button type='submit'>Add Item</button>
            </form>
            <button>Clear Completed</button>
        </div>
        
    );
}

export default TodoAdd;