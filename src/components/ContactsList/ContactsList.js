import React from "react";
import styles from "./ContactsList.module.css";

class ContactsList extends React.Component {
  render() {
    const { filter, contacts, onDeleteContact } = this.props;

    const filteredContacts = filter
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

    return (
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={styles.contact} key={id}>
            {name}: {number}
            <button
              className={styles.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactsList;
