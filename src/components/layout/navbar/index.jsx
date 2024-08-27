import React from "react";
import ThemeToggler from "./theme-togger";
import NavbarUser from "./user";

export default function Navbar() {
  return (
    <div className="bg-white dark:bg-[#121212] flex items-center justify-between gap-3 w-full py-2 px-4 h-[10dvh]">
      Navbar
      <ThemeToggler />
      <NavbarUser />
    </div>
  );
}
