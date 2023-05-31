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
        width={0}
        height={0}
        sizes="100vw"
        alt={`alt`}
        quality={100}
        className={`w-[100%] h-48 duration-500 ease-in-out group-hover:opacity-75 ${
          loading ? "scale-80 blur-sm " : "scale-100 blur-0 "
        }}`}
        onLoadingComplete={() => setLoading(false)}
      />
    </>
  );
}

export default ProductImage;
