import React from "react";
import all_product from "../Components/Assets/Frontend_Assets/all_product";

export const ShopContext = React.createContext(null);

const ShopContextProvider = ({ children }) => {
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
