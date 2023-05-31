import ProductImage from "@/components/ProductImage";
import { notFound } from "next/navigation";
import React from "react";

interface ıParams {
  params: {
    products: string;
  };
}

async function delay(ms: number) {
  return new Promise((resolve) => setInterval(resolve, ms));
}
export default async function page({ params }: ıParams) {
  await delay(1000);
  const { products } = params;
  const newProduct = products.replace("%20", " ").toLowerCase();
  const url = `https://fakestoreapi.com/products/category/${newProduct}`;
  const res = await fetch(url);
  const product: Product = await res.json();
  console.log(product);
  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10">
      <ProductImage product={product} />
      <div className="divide-y">
        <div className="space-y-2 pb-8">
          <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
          <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
            ${product.price}
          </h2>
        </div>

        <div className="pt-8">
          <p className="text-xs md:text-sm">{product.description}</p>
        </div>
      </div>
    </div>
  );
}