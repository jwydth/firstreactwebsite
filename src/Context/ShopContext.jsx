import React from "react";
import all_product from "../Components/Assets/Frontend_Assets/all_product";

export const ShopContext = React.createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState(getDefaultCart());

  const addToCart = (id) => {
    setCartItems((prev) => {
      return { ...prev, [id]: prev[id] + 1 };
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  const getCartTotal = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((e) => e.id === Number(item));
        total += itemInfo.new_price * cartItems[item];
      }
    }
    return total;
  };

  const getTotalCartItems = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        total += cartItems[item];
      }
    }
    return total;
  };

  const contextValue = {
    getTotalCartItems,
    getCartTotal,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
