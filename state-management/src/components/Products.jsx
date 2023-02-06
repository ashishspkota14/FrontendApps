import React from "react";
import ProductDetail from "./ProductDetail";

function Products({ price }) {
  return (
    <div>
      <ProductDetail price={price} />
    </div>
  );
}

export default Products;
