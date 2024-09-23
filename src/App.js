import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import ItemList from "./components/ItemList";
import SearchBar from "./components/SearchBar";
import { setItems } from "./reducers/ItemSlice";
import { Card } from "@mui/material";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const items = ["Apple", "Banana", "Orange", "Grape", "Pineapple"];
    dispatch(setItems(items));
  }, [dispatch]);
  return (
    <Card className="App">
      <h1>Item Filter</h1>
      <SearchBar />
      <h1>Items List</h1>
      <ItemList />
    </Card>
  );
}

export default App;
