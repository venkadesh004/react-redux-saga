import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productReducer";

export const rootreducer = combineReducers({
  cartData,
  productData,
});
