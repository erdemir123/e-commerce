"use client";
import { isMenu } from "@/toolkit/features/selectMenuSlice";
import styles from "./SideBar.module.css";
import { useAppDispatch, useAppSelector } from "@/toolkit/store/hooks";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { tabs } from "./data/tabs";
import eCommerce from "@/assets/images/ecommerce.png";
import { useRouter } from "next/navigation";

export default function SideBar() {
  const { menuSize } = useAppSelector((state) => state.selectMenu);
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div
      className={`${
        menuSize ? `${styles.menuIsSmall}` : "w-[400px]"
      } sidebar relative  flex justify-center transition-all duration-1500 bg-slate-200 text-slate-950 shadow-lg shadow-slate-900 h-screen`}
    >
      <div
        onClick={() => {
          dispatch(isMenu(!menuSize));
        }}
        className="absolute top-0 right-2 text-3xl cursor-pointer"
      >
        {menuSize ? <GoArrowRight /> : <GoArrowLeft />}
      </div>
      <div className={`${menuSize && "flex items-center"} mt-10`}>
        {menuSize || (
          <>
            <Image
              style={{ width: "auto", height: "200px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSofGI77Cz3tXbKTReFuM-Gqlp88zXT4Rgm6A&usqp=CAU"
              width={300}
              height={300}
              alt="logo"
              className={`mt-6 rounded-xl shadow-xl shadow-slate-600 mx-auto`}
            />
            <p className="text-3xl text-center mt-10 font-bold  text-slate-500">
              E-Commerce App
            </p>
          </>
        )}
        <div className="mt-10">
          {tabs.map((tab: any, index: number) => (
            <div
              className={`${
                menuSize ? "text-4xl" : "text-2xl"
              } flex items-center gap-2  py-2 px-3 uppercase font-bold cursor-pointer border-b border-slate-500 mt-3 hover:bg-slate-200 transition-width duration-[1000]`}
              onClick={() =>
                tab.name === "All"
                  ? router.push("/")
                  : router.push(`${tab.name}`)
              }
              key={index}
            >
              <tab.icon />
              {menuSize || <div>{tab.name}</div>}
            </div>
          ))}
        </div>
        {menuSize || (
          <Image src={eCommerce} width={300} height={300} alt="logo" />
        )}
      </div>

      <div className="flex flex-col justify-center items-center absolute bottom-20  mx-auto group bg-slate-200 w-full py-2">
        {session && (
          <div className="relative">
            <img
              onClick={() => signOut()}
              src={session.user?.image!}
              alt="profile-pic"
              className="w-12 rounded-full mx-auto mb-2 hover:opacity-50 cursor-pointer group"
            />
            <span className="absolute -top-5 -right-5  d-none group-hover:flex bg-slate-600 rounded-md text-white font-bold p-2">
              Exit
            </span>
          </div>
        )}

        <p className="text-center font-bold ">
          {menuSize || `${session?.user?.email}`}
        </p>
      </div>
    </div>
  );
}
