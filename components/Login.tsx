"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-[#11a37f] h-screen flex flex-col items-center justify-center text-center">
      <Image
        src="https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/1c/dd/18/1cdd180e-6626-e1f5-0f46-8682adada86a/source/512x512bb.jpg"
        width={300}
        height={300}
        alt="logo"
        className="mb-4 rounded-xl shadow-xl shadow-slate-600"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse mt-2">
        Chat Uygulamasına giriş yapınız 
      </button>
    </div>
  );
};

export default Login;