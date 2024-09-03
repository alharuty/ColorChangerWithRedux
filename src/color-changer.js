// src/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ColorChanger() {
  const initial_color = useSelector((state) => state.initial_color);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{initial_color}</div>
      <div className="buttons">
        <div className="button"><button onClick={() => dispatch({ type: 'CHANGE_TO_RED' })}>Change to RED</button></div>
        <div className="button"><button onClick={() => dispatch({ type: 'CHANGE_TO_GREEN' })}>Change to GREEN</button></div>
      </div>
    </div>
  );
}

export default ColorChanger;
