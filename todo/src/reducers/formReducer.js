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
    if(action.type === 'ADD_ITEM'){
        return [
            ...state,
            {
                item: action.payload,
                complete: false,
                id: Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4)
            }
        ]
    }
    if(action.type === 'CLEAR_COMPLETED'){
        return [...state].filter(item => {
            return !item.completed
        })
    }
}