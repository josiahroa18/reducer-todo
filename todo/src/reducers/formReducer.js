import moment from 'moment';

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589,
        timeCreated: moment().format('HH:mm:ss'),
        timeCompleted: null
    },
    {
        item: 'Finish todo list',
        completed: false,
        id: 3892987123,
        timeCreated: moment().format('HH:mm:ss'),
        timeCompleted: null
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
                    id: Date.now(),
                    timeCreated: moment().format('HH:mm:ss'),
                    timeCompleted: null
                }
            ];
        case 'TOGGLE_COMPLETED':
            return state.map(item => {
                if(item.id === action.id){
                    return {
                        ...item,
                        completed: !item.completed,
                        timeCompleted: !item.completed ? moment().format('HH:mm:ss') : null
                    }
                }else return item
            });
        case 'CLEAR_COMPLETED':
            return [...state].filter(item => {
                return !item.completed
            });
        default:
            return state;
    }
}