import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_SET,
  COUNTER_SET_NOTE,
} from "../types/counterTypes";

const initialState = {
  value: 0,
  note: "",
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case COUNTER_DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    case COUNTER_SET:
      return {
        ...state,
        value: action.payload,
      };
    case COUNTER_SET_NOTE:
      return {
        ...state,
        note: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
