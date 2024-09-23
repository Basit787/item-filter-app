import itemsReducer, { setItems, setSearchTerm } from "./ItemSlice";

describe("items reducer", () => {
  const initialState = {
    allItems: [],
    searchTerm: "",
  };

  it("should handle initial state", () => {
    expect(itemsReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setItems", () => {
    const items = ["apple", "banana", "orange"];
    const actual = itemsReducer(initialState, setItems(items));
    expect(actual.allItems).toEqual(items);
  });

  it("should handle setSearchTerm", () => {
    const searchTerm = "fruit";
    const actual = itemsReducer(initialState, setSearchTerm(searchTerm));
    expect(actual.searchTerm).toEqual(searchTerm);
  });

  it("should handle multiple actions", () => {
    let state = itemsReducer(initialState, setItems(["apple", "banana"]));
    state = itemsReducer(state, setSearchTerm("ban"));
    expect(state).toEqual({
      allItems: ["apple", "banana"],
      searchTerm: "ban",
    });
  });
});
