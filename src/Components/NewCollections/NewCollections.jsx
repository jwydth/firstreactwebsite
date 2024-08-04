import React, { useEffect } from "react";
import "./NewCollections.css";
// import new_collection from "../Assets/Frontend_Assets/new_collections";
import { Item } from "../Item/Item";

export const NewCollections = () => {
  const [new_collection, setNewCollection] = React.useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/newcollection")
      .then((res) => res.json())
      .then((data) => setNewCollection(data));
  }, []);
  return (
    <div className="new-collection">
      <h1>New Collection</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
