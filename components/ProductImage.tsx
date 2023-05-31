"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  product: Product;
  fill?: boolean;
};

function ProductImage({ product, fill }: Props) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
              ? "scale-80 blur-sm "
              : "scale-100 blur-0 "
          }}`}
          onLoadingComplete={() => setLoading(false)}
        />
      
    </>
  );
}

export default ProductImage;