import React, { useState, useReducer } from 'react';

import { initialState, reducer } from '../reducers/reducer';

const ToDoList = () => {

    const [newTodo, setNewTodo] = useState();
    

    // useReducer - takes in a reducer, and an initialState obj
    // returns - a state obj, and the dispatch fn
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const handleChanges = e => {
        setNewTodo(e.target.value);
      };

      
  
    return (
      <div>
          <h1>To-do</h1>
            {state.todos.map(item => (
                <div className = 'to-do'>
                    <h3>{item.item}</h3>
                    <button onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: item.id })}>Mark complete</button>
                </div>
          ))}

          <div>
          <input
            className="todo-input"
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={handleChanges}
          />
          <button
            onClick={() =>
              dispatch({ type: 'ADD_TODO', payload: newTodo })
            }
          >
            Add item
          </button>
          <button onClick={() => dispatch({type: 'CLEAR_COMPLETED' })}>Clear completed</button>
        </div>

      </div>
    );
  };
  
  export default ToDoList;
  
