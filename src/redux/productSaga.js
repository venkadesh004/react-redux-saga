import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("Action Add is called", data);
  data = yield data.json();
  console.log("Get Products Saga Called", data);
  yield put({ type: SET_PRODUCT_LIST, data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
