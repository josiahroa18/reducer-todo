export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Finish todo list',
        completed: false,
        id: 3892987123
    }
]

export const formReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    item: action.payload,
                    complete: false,
                    id: Date.now()
                }
            ];
        case 'CLEAR_COMPLETED':
            return [...state].filter(item => {
                return !item.completed
            });
        case 'TOGGLE_COMPLETED':
            for(let i=0; i<state.length; i++){
                if(state[i].id === action.id){
                    console.log(state[i]);
                    state[i] = {
                        ...state[i],
                        completed: !state[i].completed
                    }
                }
            }
            return state;
    }
}