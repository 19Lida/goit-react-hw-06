import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from "./root-reducer";
// import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

// import contactsSlice from "./contacts/contactsSlice";
// import filtersSlice from "./filters/filtersSlice";

// const store = configureStore({
//   reducer: {
//     contacts: contactsSlice,
//     filter: filtersSlice,
//   },
// });
const store = configureStore({
  reducer: rootReducer,
});
export default store;
