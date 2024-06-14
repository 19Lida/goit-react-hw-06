// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";

// export const addContact = (items) => ({
//   type: "contacts/add",
//   payload: items,
// });
// export const deleteContact = (items) => ({
//   type: "contacts/delete",
//   payload: items,
// });
// export const changeFilter = (name) => ({
//   type: "filter/change",
//   payload: name,
// });

// const reducer = (state = initialStore, action) => {
//   switch (action.type) {
//     case "contacts/add":
//       return { ...state, payload };
//     case "contacts/delete":
//       return state.filters((items) => items.id !== payload);
//     case "filter/change":
//       return;
//   }
//   return state;
// };

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
