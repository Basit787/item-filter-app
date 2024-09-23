import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const ItemList = () => {
  const items = useSelector((state) => state.items.allItems);
  const searchTerm = useSelector((state) => state.items.searchTerm);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredItems.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
};

export default React.memo(ItemList);
