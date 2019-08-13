
export const initialState = {todos: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }]};

  export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {todos: 
                [...state.todos,
                {item: action.payload,
                completed: false,
                id: Date.now(),}   
                ]};
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(item => 
                    item.id === action.payload ? {...item, completed: !item.completed} : item)
            }
        default:
            return state;
    }
  };