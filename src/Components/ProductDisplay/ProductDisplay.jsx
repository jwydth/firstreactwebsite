import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/Frontend_Assets/star_icon.png";
import star_dull_icon from "../Assets/Frontend_Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = React.useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="product-display-right-price">
          <div className="product-display-price-old">${product.old_price}</div>
          <div className="product-display-price-new">${product.new_price}</div>
        </div>

        <div className="product-display-right-description">A good jacket.</div>

        <div className="product-display-right-sizes">
          <h1>Select size</h1>
          <div className="product-display-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XLL</div>
          </div>
        </div>

        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add to cart
        </button>
        <p className="product-display-right-category">
          <span>Category:</span> Women, T-shirt, Crop Top
        </p>
        <p className="product-display-right-category">
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};
