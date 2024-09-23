import { combineReducers } from "@reduxjs/toolkit";
import ItemSlice from "./ItemSlice";

const rootReducer = combineReducers({
  items: ItemSlice,
});

export default rootReducer;
