"use client";

import Link from "next/link";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

// Icons from react-icons
import { MdDashboard } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaPenNib, FaStar } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const links = [
    { href: "/admin/dashboard", label: "Dashboard", icon: <MdDashboard /> },
    { href: "/admin/dashboard/notifications", label: "Notifications", icon: <IoNotificationsSharp />,},
    { href: "/admin/dashboard/blogs", label: "Blogs", icon: <FaPenNib /> },
    { href: "/admin/dashboard/popular", label: "Popular", icon: <FaStar /> },
    { href: "/admin/dashboard/settings", label: "Settings", icon: <FaGear /> },
  ];

 // Get the current path
 const [currentPath, setCurrentPath] = React.useState("");


    const pathname = usePathname();
    React.useEffect(() => {
      setCurrentPath(pathname);
    }, [pathname]);

  return (
    <div className="flex">
      <nav className="h-screen p-4 text-lg font-semibold tracking-wide mx-2">
        {links.map((link) => (
          <Link
            key={link.href}
            className={`${currentPath === link.href ? "bg-gray-200 dark:bg-gray-800" : null} px-6 rounded-lg flex py-1 items-center`}
            href={link.href}
          >
            {link.icon}
            <span className="ml-2">{link.label}</span>
          </Link>
        ))}
      </nav>
      <main className="bg-[rgb(18,25,39)] w-full text-white p-4">{children}</main>
    </div>
  );
};

export default Layout;
