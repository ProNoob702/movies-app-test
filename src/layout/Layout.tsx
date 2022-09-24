import React from "react";
import { NavBar } from "./NavBar";

export const AppLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <NavBar />
      <main className="grow overflow-y-auto p-4 pt-0">
        <div className="m-auto">{children}</div>
      </main>
      {/* <AppFooter /> */}
    </div>
  );
};
