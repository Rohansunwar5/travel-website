"use client"

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from '../../public/Logo.png'
import { TiLocationArrow } from "react-icons/ti";
// import clsx from "clsx";

const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Prologue", href: "prologue" },
  { label: "Features", href: "features" },
];

const NavBar = () => {
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY === 0) {
        setIsNavVisible(true);
        navContainerRef.current?.classList.remove("floating-nav");
      } else if (scrollY > lastScrollY) {
        setIsNavVisible(false);
        navContainerRef.current?.classList.add("floating-nav");
      } else if (scrollY < lastScrollY) {
        setIsNavVisible(true);
        navContainerRef.current?.classList.add("floating-nav");
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2,
      });
    }
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* left side of the navbar */}
          <div className="flex items-center gap-7">
            <Image
              src={Logo}
              alt="logo"
              width={80}
              height={80}
              className="w-20"
            />
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
            Contact Us <TiLocationArrow />
          </button>
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
               <a
               key={index}
               href={`#${item.href}`}
               className="nav-hover-btn"
             >
               {item.label}
             </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
