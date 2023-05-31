"use client"
import { useAppSelector } from "@/toolkit/store/hooks";
import React from "react";

export default function SideBar() {
    const { menuSize } = useAppSelector((state) => state.selectMenu);
    console.log(menuSize);
  return <div>SideBar</div>;
}
