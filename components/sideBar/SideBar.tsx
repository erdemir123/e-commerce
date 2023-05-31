"use client";
import { isMenu } from "@/toolkit/features/selectMenuSlice";
import styles from "./SideBar.module.css";
import { useAppDispatch, useAppSelector } from "@/toolkit/store/hooks";
import React from "react";
import { signOut, useSession } from "next-auth/react";

export default function SideBar() {
  const { menuSize } = useAppSelector((state) => state.selectMenu);
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  return (
    <div className={`${menuSize ? `${styles.menuIsSmall}` : ""}`}>
      <div
        onClick={() => {
          dispatch(isMenu(!menuSize));
        }}
      >
        X
      </div>
      <div className="p-2 flex flex-col w-[100%] overflow-y-auto max-w-[300px] min-w-[250px]  mx-auto">
        <div>
          <div>
            {session && (
              <img
                onClick={() => signOut()}
                src={session.user?.image!}
                alt="profile-pic"
                className="h-12 w-12 rounded-full mx-auto mb-2 hover:opacity-50 cursor-pointer"
              />
            )}
            <p className="text-center ">{menuSize && `${session?.user?.email}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
