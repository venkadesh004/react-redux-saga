import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  console.log("Reducer is called", action);
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.log("SET_PRODUCT_LIST called", action);
      return [action.data];
    default:
      return data;
  }
};
