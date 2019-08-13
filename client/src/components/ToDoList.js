import React, { useState, useReducer } from 'react';

import { initialState, reducer } from '../reducers/reducer';

const ToDoList = () => {
    // useReducer - takes in a reducer, and an initialState obj
    // returns - a state obj, and the dispatch fn
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
  
    return (
      <div>
          <h1>
            {state.item}
          </h1>
      </div>
    );
  };
  
  export default ToDoList;
  
