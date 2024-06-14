// import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
// import initialContacts from "./initialContacts.json";
import { addContact, deleteContact } from "../redux/contacts/contactsSlice";
import { changeFilter } from "../redux/filters/filtersSlice";
import { selectContacts, selectNameFilter } from "../redux/selectors";
// const getStoredContacts = () => {
//   const StoredContacts = localStorage.getItem("contacts");
//   return StoredContacts ? JSON.parse(StoredContacts) : initialContacts;
// };

function App() {
  const contacts = useSelector(selectContacts);
  // console.log(contacts);
  //
  // const [contacts, setContacts] = useState([]);
  const filter = useSelector(selectNameFilter);
  // console.log(filter);
  // const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  const handleAddContact = (newContact) => {
    // setContacts((prevContacts) => {
    //   return [...prevContacts, newContact];
    // });
    dispatch(addContact({ newContact }));
  };
  const handleSearch = (name) => {
    // setSearchTerm(value);
    dispatch(changeFilter(name));
  };

  const handleDeleteContact = (contactId) => {
    // setContacts((prevContacts) =>
    //   prevContacts.filter((contact) => contact.id !== contactId)
    // );
    dispatch(deleteContact(contactId));
  };

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      {/* <ContactForm onSubmit={addContact} /> */}
      <ContactForm onSubmit={handleAddContact} />

      {/* <SearchBox searchTerm={searchTerm} onSearchChange={handleSearch} /> */}
      {/* <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      /> */}
    </div>
  );
}

export default App;
