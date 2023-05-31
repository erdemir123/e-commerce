import React from "react";
interface ıProduct {
  product: string;
}
interface ıParams {
  params: ıProduct;
}
export default function page({ params }: ıParams) {
  const { product } = params;
  const newProduct = product.replace("%20", " ");
  return <div>{newProduct}</div>;
}
