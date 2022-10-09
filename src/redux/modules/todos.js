
// Action
const DETAIL_TODO = "DETAIL_TODO";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SET_STATE = "SET_STATE";


// Action Creator 
export const detailTodo = (payload) => {
  return {
    type: DETAIL_TODO, payload
  };
};

export const addTodo = (payload) => {
  return {
    type: ADD_TODO, payload
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO, payload
  };
};

export const updateTodo = (payload) => {
  return {
    type: SET_STATE, payload
  };
};




// 초기 상태값
const initialState = {
  todoList: [],
  todo: {},
};

// 리듀서
const counter = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case DETAIL_TODO: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다. 
      return {
        ...state,
        todo: state.todoList.find((todo) => todo.id == action.payload)
      };
    case ADD_TODO: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다. 
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case DELETE_TODO: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다. 
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload)
      };
    case SET_STATE: // case에서도 문자열이 아닌, 위에서 선언한 상수를 넣어줍니다. 
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };
    default:
      return state;
  }
};


export default counter;