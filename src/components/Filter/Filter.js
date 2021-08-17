import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ filter, handleFilter }) => (
  <input className={styles.contact} value={filter} onChange={handleFilter} />
);

export default Filter;
