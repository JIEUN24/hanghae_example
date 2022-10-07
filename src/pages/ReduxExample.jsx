import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ReduxExample = () => {
  const dispatch = useDispatch();
  const number = useSelector(state => state.counter.number);
  console.log(number)
  return (
    <div>
      <button onClick={() => {
        dispatch({ type: "PLUS_ONE" })
      }}>+ 1</button>
      <button onClick={() => {
        dispatch({ type: "MINUS_ONE" })
      }}>- 1</button>
      <p>{number}</p>
    </div>
  )
}

export default ReduxExample