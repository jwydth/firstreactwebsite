import React from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrums } from "../Components/Breadcrums/Breadcrums";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";

export const Products = () => {
  const { all_product } = React.useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((item) => item.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};
