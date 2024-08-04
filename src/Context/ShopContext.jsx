import React, { useEffect } from "react";
// import all_product from "../Components/Assets/Frontend_Assets/all_product";

export const ShopContext = React.createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300 + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [all_product, setAllProduct] = React.useState([]);
  const [cartItems, setCartItems] = React.useState(getDefaultCart());

  useEffect(() => {
    fetch("http://localhost:4000/getproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
      });

    if (localStorage.getItem("aut_token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
          aut_token: `${localStorage.getItem("aut_token")}`,
        },
        body: "",
      })
        .then((res) => res.json())
        .then((data) => {
          setCartItems(data);
        });
    }
  }, []);

  const addToCart = (id) => {
    setCartItems((prev) => {
      return { ...prev, [id]: prev[id] + 1 };
    });

    if (localStorage.getItem("aut_token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
          aut_token: `${localStorage.getItem("aut_token")}`,
        },
        body: JSON.stringify({ itemId: id }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      return { ...prev, [id]: prev[id] - 1 };
    });

    if (localStorage.getItem("aut_token")) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
          aut_token: `${localStorage.getItem("aut_token")}`,
        },
        body: JSON.stringify({ itemId: id }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
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
