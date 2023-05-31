"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Login = () => {
  return (
    <div className="bg-[#11a37f] h-screen flex flex-col items-center justify-center text-center ">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSofGI77Cz3tXbKTReFuM-Gqlp88zXT4Rgm6A&usqp=CAU"
        width={300}
        height={300}
        alt="logo"
        className="mb-4 rounded-xl shadow-xl shadow-slate-600"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse mt-20"
      >
        Login To See Discounts and Buy
      </button>
      
    </div>
  );
};

export default Login;
