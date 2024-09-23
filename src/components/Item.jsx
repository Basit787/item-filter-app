import React from "react";
import "../App.css";

const Item = React.memo(({ item }) => {
  return <div className="items">{item}</div>;
});

export default Item;
