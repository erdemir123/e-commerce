import React from "react";
interface ıProduct {
  product: string;
}
interface ıParams {
  params: ıProduct;
}

async function delay(ms: number) {
  return new Promise((resolve) => setInterval(resolve, ms));
}
export default async function page({ params }: ıParams) {
  await delay(1000);
  const { product } = params;
  const newProduct = product.replace("%20", " ");
  return <div>{newProduct}</div>;
}
