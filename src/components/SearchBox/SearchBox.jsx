import React from "react";
import { useSelector } from "react-redux";

import css from "./SearchBox.module.css";
import store from "../../redux/store";

const SearchBox = ({ searchTerm, onSearchChange }) => {
  const contact = useSelector((store) => store.contacts);
  console.log(contact);

  return (
    <div className={css.box}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
