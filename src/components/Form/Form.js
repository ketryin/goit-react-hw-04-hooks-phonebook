import React, { useState } from "react";
import shortid from "shortid";
import Styles from "./Form.module.css";

function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = shortid.generate();
  const phoneInputId = shortid.generate();

  const handleChange = (e, setValue) => {
    const { value } = e.currentTarget;
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={Styles.form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId} className={Styles.label}>
        Name
        <input
          className={Styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id={nameInputId}
          onChange={(e) => handleChange(e, setName)}
          value={name}
        />
      </label>
      <label htmlFor={phoneInputId}>
        Phone number
        <input
          className={Styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={(e) => handleChange(e, setNumber)}
          value={number}
        />
      </label>
      <button className={Styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
