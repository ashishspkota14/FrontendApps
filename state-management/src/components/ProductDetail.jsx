import React from "react";
import PriceDetail from "./PriceDetail";

function ProductDetail({ price }) {
  return (
    <div>
      <PriceDetail price={price} />
    </div>
  );
}

export default ProductDetail;
