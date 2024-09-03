// src/reducer.js

import Red from "./red";
import Green from "./green";
import InitialColor from "./initialcolor";


const initialState = {
    initial_color: <InitialColor />,
    red_text: <Red />,
    green_text: <Green />

  };
  
  function colorChanging(state = initialState, action) {
    switch (action.type) {
      case 'CHANGE_TO_RED':
        return { ...state, initial_color: state.red_text};
      case 'CHANGE_TO_GREEN':
        return { ...state, initial_color: state.green_text};
      default:
        return state;
    }
  }
  
  export default colorChanging;
  