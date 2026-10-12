import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CLEAR,
} from "../types/cartTypes";

const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + (action.payload.price || 0),
      };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        total: state.total - (action.payload.price || 0),
      };
    case CART_CLEAR:
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;
