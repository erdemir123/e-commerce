"use client";
import { store } from "@/toolkit/store/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

interface ıProps {
  children: JSX.Element;
}
export default function ToolkitProvider({ children }: ıProps) {
  return <Provider store={store}>{children}</Provider>;
}
