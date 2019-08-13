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
          {state.map(item => (
              <div onClick={() => dispatch({ type: 'TOGGLE_TODO' })}>
                <h1>{item.item}</h1>
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
        </div>

      </div>
    );
  };
  
  export default ToDoList;
  
