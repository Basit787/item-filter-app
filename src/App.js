import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import ItemList from "./components/ItemList";
import SearchBar from "./components/SearchBar";
import { setItems } from "./reducers/ItemSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const items = ["Apple", "Banana", "Orange", "Grape", "Pineapple"];
    dispatch(setItems(items));
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Item Filter</h1>
      <SearchBar />
      <h1>Items List</h1>
      <ItemList />
    </div>
  );
}

export default App;
