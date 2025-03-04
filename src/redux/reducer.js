import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  console.log("Reducer is called", action);
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      data.length = data.length - 1;
      return [...data];
    case EMPTY_CART:
      return [];
    default:
      return data;
  }
};
