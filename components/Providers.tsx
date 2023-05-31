"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";
type Iprops = {
  children: React.ReactNode;
  session: Session | null;
};
function Providers({ children }: Iprops) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default Providers;
