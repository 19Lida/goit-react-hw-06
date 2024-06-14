import { ADD_CONTACTS, DELETE_CONTACTS } from "./contacts-types";
const initialState = {
  contacts: {
    items: [],
  },
};
const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACTS:
      const newContacts = [...state.items, payload];
      return { ...state, contacts: newContacts };
    case DELETE_CONTACTS:
      const result = state.items.filter((item) => item.id !== payload);
      return { ...state, contacts: result };
    default:
      return state;
  }
};
export default contactsReducer;
