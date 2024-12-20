export const ADD = "Add"
export const REMOVE = "Remove"
export const TOGGLE = "Toggle"

export const initialState = [];

export const todoReducer = (state, action) => {

  switch(action.type) {
    case ADD:
      return [...state, {id:Date.now(),text:action.payload, done:false}]
    case TOGGLE:
      return state.map((todo) =>
          todo.id === action.payload ? {...todo, done: !todo.done} : todo
      ) ;
    case REMOVE:
      return state.filter((todo) => todo.id !== action.payload)
  }

  return state;
};