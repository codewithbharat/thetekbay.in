import React, { ReactNode } from "react";
import Link from "next/link";
import CategoriesNavigation from "@/components/web/CategoriesNavigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* navigation bar  */}
      <nav className="flex items-center bg-gray-200 font-mono px-2 md:px-10">
        <p className="text-sm"> {new Date().toDateString()} </p>
        <p className="flex gap-4 p-4 justify-center font-medium text-sm ml-auto">
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>

          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </p>
      </nav>
      {/* the header title  */}
      <header className="text-center text-4xl md:text-6xl font-bold p-4 font-serif captalize">
        <Link href="/"> The Tekno Times</Link>
        {/* date today  */}
      </header>

      {/* navigation bar for categories  */}
      <CategoriesNavigation />

      <main className="mx-2 md:mx-10">{children}</main>

      {/* a deatiled footer with some links  */}
      <footer className="flex items-center bg-gray-200 font-mono px-2 md:px-10">
        <p className="text-sm"> &copy; 2024 The TechBay </p>
        <p className="flex gap-4 p-4 justify-center font-medium text-sm ml-auto">
          <Link href="/privacy" className="hover:text-gray-400">
            Privacy
          </Link>

          <Link href="/terms" className="hover:text-gray-400">
            Terms
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
