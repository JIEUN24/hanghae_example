// // 원래 있던 코드
// import { createStore } from "redux";
// import { combineReducers } from "redux";

// // 새롭게 추가한 부분
// import todos from "../modules/todos";

// const rootReducer = combineReducers({
//   todos: todos, // <-- 새롭게 추가한 부분
// });
// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todos";

const store = configureStore({
  reducer: { todos: todos },
});

export default store;