import React, { ReactNode } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const Categories = [
    "Software",
    "Gadgets",
    "Trends",
    "Mobile",
    "Developers",
  ];

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
        <Link href="/"> The TechBay</Link>
        {/* date today  */}
      </header>

      <nav className="flex gap-4 p-4 justify-center border-b-2 border-b-black  border-t-4 font-medium">
        {Categories.map((category) => (
          <Link
            key={category}
            href={`/${category.toLowerCase()}`}
            className="hover:text-gray-400 text-sm"
          >
            {category}
          </Link>
        ))}
      </nav>
      <main className="mx-2 md:mx-10">{children}</main>
    </div>
  );
};

export default Layout;
