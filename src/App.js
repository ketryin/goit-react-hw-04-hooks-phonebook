import React, { useState, useEffect } from "react";
import shortid from "shortid";
import Form from "./components/Form";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    if (localStorage.getItem("contacts")) {
      setContacts(JSON.parse(localStorage.getItem("contacts")));
    }
  }, []);

  const addContact = (name, number) => {
    if (contacts.find((contact) => contact.name === name)) {
      alert("Attempt to create existing contact!");
      return;
    }

    setContacts([...contacts, { id: shortid.generate(), name, number }]);
  };

  const handleFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const onDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      {contacts.length > 0 && (
        <>
          <h1>Contacts</h1>
          <Filter filter={filter} handleFilter={handleFilter} />
          <ContactsList
            filter={filter}
            contacts={contacts}
            onDeleteContact={onDeleteContact}
          />
        </>
      )}
    </div>
  );
}

export default App;
