import React from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import drop_down_icon from "../Components/Assets/Frontend_Assets/dropdown_icon.png";
import { Item } from "../Components/Item/Item";

export const ShopCategory = (props) => {
  const { all_product } = React.useContext(ShopContext);
  const filteredProducts = all_product.filter(
    (item) => props.category === item.category
  );
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={drop_down_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredProducts.map((item) => (
          <Item
            key={item.id} // Assuming 'id' is unique
            id={item.id}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
