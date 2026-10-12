import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  counter: counterReducer,
});

export default rootReducer;
