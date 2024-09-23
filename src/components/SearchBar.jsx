import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../reducers/ItemSlice";
import { TextField } from "@mui/material";
import "../App.css";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <TextField
      label="Search"
      type="text"
      placeholder="Search..."
      onChange={handleSearch}
      className="input"
    />
  );
};

export default SearchBar;
