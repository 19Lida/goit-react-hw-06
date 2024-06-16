import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { addContact, deleteContact } from "../redux/contacts/contactsSlice";
import { changeFilter } from "../redux/filters/filtersSlice";
import { selectContacts, selectNameFilter } from "../redux/selectors";

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };
  const handleSearch = (name) => {
    dispatch(changeFilter(name));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />

      <SearchBox searchTerm={filter} onSearchChange={handleSearch} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
