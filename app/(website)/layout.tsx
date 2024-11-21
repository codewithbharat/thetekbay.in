import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
             {/* the header title  */}
            <header className="text-center text-6xl font-bold p-4 font-serif uppercase">
               The TechBay
            </header>
            <nav className="flex gap-4 p-4 justify-center border-b-2 border-b-black mx-10 border-t-4 font-medium my-2">
                <Link href="/" className="hover:text-gray-400">
                    Home
                </Link>
                <Link href="/about" className="hover:text-gray-400">
                    About
                </Link>
                <Link href="/contact" className="hover:text-gray-400">
                    Contact
                </Link>
            </nav>
            <main className='mx-10'>{children}</main>
        </div>
    );
};

export default Layout;
