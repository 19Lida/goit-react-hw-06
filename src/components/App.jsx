import { useState, useEffect } from "react";
import store from "../redux/store.js";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
// import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import initialContacts from "./initialContacts.json";

// const getStoredContacts = () => {
//   const StoredContacts = localStorage.getItem("contacts");
//   return StoredContacts ? JSON.parse(StoredContacts) : initialContacts;
// };

function App() {
  const contacts = useSelector((store) => store.contacts);
  console.log(contacts);
  //
  // const [contacts, setContacts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Provider store={store}>
      <div>
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        {/* <ContactForm /> */}

        <SearchBox searchTerm={searchTerm} onSearchChange={handleSearch} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </Provider>
  );
}

export default App;
