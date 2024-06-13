import { createSlice } from "@reduxjs/toolkit";
const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact(state, { payload }) {},
    deleteContact(state, { payload }) {},
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
