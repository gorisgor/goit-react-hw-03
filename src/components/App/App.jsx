import initialContacts from "../../contacts.json";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useEffect, useState } from "react";

import css from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const onDelete = (contactId) => {
    console.log(contactId);
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}
