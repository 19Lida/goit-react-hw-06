import { configureStore } from "@reduxjs/toolkit";
// import { persistStore } from "redux-persist";
// import rootReducer from "./root-reducer";
import contactsReducer from "./contacts/contacts-reducer";
import filterReducer from "./filters/filter-reduser";
// import { createStore } from "redux";

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

// const initialStore = {
//   contacts: {
//     items: [],
//   },
//   filters: {
//     name: "",
//   },
// };
// const store = createStore(
//   reducer,
//   initialStore,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
export default store;
