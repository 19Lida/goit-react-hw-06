// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
const reducer = (state) => {
  return state;
};
const initialStore = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};
const store = createStore(
  reducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
