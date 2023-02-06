import React from "react";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function PriceDetail() {
  const price = useContext(MyContext);
  return <div>{price}</div>;
}

export default PriceDetail;
