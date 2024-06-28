import initialContacts from "../../contacts.json";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useEffect, useState } from "react";

import css from "./App.module.css";

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem("contacts");
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return initialContacts;
};

export default function App() {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const onDelete = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const shownContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={shownContacts} onDelete={onDelete} />
    </div>
  );
}
