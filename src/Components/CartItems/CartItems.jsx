import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/Frontend_Assets/cart_cross_icon.png";

export const CartItems = () => {
  const { getCartTotal, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cart-item">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Prices</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cart-item-format cartitems-format-main">
                <img src={e.image} alt="" className="cart-icon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-item-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cart-item-remove-icon"
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${getCartTotal()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${getCartTotal()}</h3>
            </div>
          </div>

          <button>Proceed to checkout</button>
        </div>

        <div className="cartitem-promotecode">
          <p>if you have a promote code, Enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder="promote code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
