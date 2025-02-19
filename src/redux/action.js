import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data) => {
  console.log("Action Add is called", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (data) => {
  console.log("Action Remove is called", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = (data) => {
  console.log("Action Empty is called", data);
  return {
    type: EMPTY_CART,
    data: [],
  };
};
