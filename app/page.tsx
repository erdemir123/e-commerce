import Navbar from "@/components/Navbar";
import ProductImage from "@/components/ProductImage";

export default async function Home() {
  const url = `https://fakestoreapi.com/products`;
  const res = await fetch(url);
  const productItems: Product[] = await res.json();
  console.log(productItems);
  return (
    <div className="flex flex-col justify-center md:flex-row items-center gap-8 pb-10 flex-wrap overflow-y-scroll h-[calc(100%-120px)]">
      {productItems.map((product: Product, index: number) => (
        <div
          className="w-[350px] bg-slate-300 rounded-lg shadow-lg shadow-slate-800 flex flex-col justify-center items-center border text-center mt-16 "
          key={index}
        >
          <div className="w-[300px] h-[300px] flex flex-col justify-center items-center">
            <ProductImage product={product} />
          </div>

          <div className="space-y-2 pb-8">
            <h1 className="text-2xl md:text-4xl font-bold  w-100 h-20 overflow-hidden text-ellipsis">
              {product.title}
            </h1>
            <h2 className="text-gray-500 w-100 h-20 font-bold text-xl md:text-3xl overflow-hidden text-ellipsis">
              ${product.price}
            </h2>
          </div>

          <div className="pt-8 ">
            <p className="text-xs w-100 h-20 md:text-sm mb-4 overflow-hidden text-ellipsis">
              {product.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
