import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <main className='flex'>
      <Sidebar />
      <div className='grow'>
        <Navbar />
        <div className='h-[90dvh] overflow-y-auto'>{children}</div>
      </div>
    </main>
  );
}
