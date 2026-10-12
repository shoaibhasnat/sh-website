import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_SET,
  COUNTER_SET_NOTE,
} from "../types/counterTypes";

// Action creators for counter
export const incrementCounter = () => ({
  type: COUNTER_INCREMENT,
});

export const decrementCounter = () => ({
  type: COUNTER_DECREMENT,
});

export const setCounter = (value) => ({
  type: COUNTER_SET,
  payload: value,
});

export const setCounterNote = (note) => ({
  type: COUNTER_SET_NOTE,
  payload: note,
});
