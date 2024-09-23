import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    allItems: [],
    searchTerm: "",
  },
  reducers: {
    setItems: (state, action) => {
      state.allItems = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setItems, setSearchTerm, addItem } = itemsSlice.actions;
export default itemsSlice.reducer;
