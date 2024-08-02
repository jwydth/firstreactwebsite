import React from "react";
import "./CSS/ShopCategory.css";
// import { ShopContext } from "../Context/ShopContext";

export const ShopCategory = (props) => {
  // const { all_product } = React.useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
    </div>
  );
};

export default ShopCategory;
