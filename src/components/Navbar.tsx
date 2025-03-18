"use client"

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import Logo from '../../public/Logo.png'
import WhatsAppContactButton from "./WhatsAppContactButton";

const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Destinations", href: "cards" },
  { label: "Features", href: "features" },
  { label: "itinerary", href: "itinerary" },
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
              width={100}
              height={100}
              className="w-40"
              // style={{ width: '12rem' }}
            />
            <WhatsAppContactButton
              phoneNumber="+917364071493" 
              message="Hello! I'd like to get in touch."
              buttonText="Contact Us"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <ScrollLink
                  key={index}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="nav-hover-btn cursor-pointer"
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;