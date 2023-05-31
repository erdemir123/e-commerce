import ProductImage from "@/components/ProductImage";

export default async function Home() {
  const url = `https://fakestoreapi.com/products`;
  const res = await fetch(url);
  const products: Product = await res.json();
  console.log(products);
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 pb-10 border border-red-500 flex-wrap">
      {products?.map((product: Product, index: number) => (
        <div className="border border-red-500 w-96">
          <ProductImage product={product} />
          <div className="divide-y">
            <div className="space-y-2 pb-8">
              <h1 className="text-2xl md:text-4xl font-bold">
                {product.title}
              </h1>
              <h2 className="text-gray-500 font-bold text-xl md:text-3xl">
                ${product.price}
              </h2>
            </div>

            <div className="pt-8">
              <p className="text-xs md:text-sm">{product.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
