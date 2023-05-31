import React, { ReactNode } from "react";
interface ıProps {
  children: ReactNode;
}
export default function layout({ children }: ıProps) {
  return (
    <div>
      <div className="bg-slate-300 w-100 flex justify-center items-center flex-col py-4 gap-1 text-center">
        <h2 className="text-2xl text-slate-600 font-bold tracking-widest">Ecommerce for everyone</h2>
        <p className="text-2xl text-slate-400  ">
          Everything you nedd to sell online. Try it free 14 days. No Credit
          card required
        </p>
        <button className="bg-teal-500 px-3 py-2 font-bold rounded-md">START FOR FREE</button>
      </div>

      {children}
    </div>
  );
}
