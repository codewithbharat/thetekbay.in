'use client';

import Link from 'next/link';
import React, { useState , useEffect, useRef } from 'react'
import { IoClose, IoMenu } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";

const CategoriesNavigation = () => {
    const Categories = [
        "Software",
        "Gadgets",
        "Trends",
        "Mobile",
        "Developers",
      ];
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        if (window.innerWidth < 768) {
          setToggle(false);
        }
      } 
    , []);

     const navRef = useRef<HTMLElement>(null);


  return (
     
     <section className=" border-b-black border-b-2 mb-4 border-t-4 flex justify-center gap-4">
        <button onClick={() => setToggle(!toggle)} className="md:hidden py-2">
        <IoMenu  size={28}/>
        </button>
       
    {toggle && <nav ref={navRef} className="absolute right-0 h-screen md:h-auto justify-start md:justify-center w-2/3 md:w-auto px-5 text-right bg-white flex-col md:flex-row  md:static flex gap-4 p-4 font-medium">
    <span className='md:hidden'>
    <IoClose onClick={() => setToggle(!toggle)}/>
    </span>
        {Categories.map((category) => (
          <Link
            key={category}
            onClick={() => setToggle(!toggle)}
            href={`/category/${category.toLowerCase()}`}
            className="hover:text-gray-400 text-xl md:text-sm"
          >
            {category}
          </Link>
        ))}
      </nav>}
      <button className="py-2">
        <LuSearch size={24}/>
        </button>
     </section>
  )
}

export default CategoriesNavigation
