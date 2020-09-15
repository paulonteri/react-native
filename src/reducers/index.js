import { combineReducers } from 'redux';

// dummy data
const INITIAL_STATE = {
  current: [],
  possible: ['Alice', 'Bob', 'Sammy'],
};

const personsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({ persons: personsReducer });
