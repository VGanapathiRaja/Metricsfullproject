import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Createslice";
import Application from './Application';
export default function Reduxpage() {
   const count = useSelector((state) => state.counter.value);
   const dispatch = useDispatch();
  return (
    <div>
      Reduxpage
      <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>


      <Application/>
    </div>
  )
}
